"""
Email service — send OTP, welcome emails via SMTP (Gmail / any provider).

Dev Mode Fallback:
  If SMTP sending fails in development, the OTP is printed to console
  so you can test the full flow without a working email setup.
"""

import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from jinja2 import Environment, FileSystemLoader, select_autoescape
from pathlib import Path
from app.core.config import get_settings
from app.models.otp_model import OTPPurpose
from loguru import logger
import sys

settings = get_settings()

# ── Jinja2 template environment ──────────────────────────────
_template_dir = Path(__file__).resolve().parent.parent / "templates"
_jinja_env = Environment(
    loader=FileSystemLoader(str(_template_dir)),
    autoescape=select_autoescape(["html"]),
)


def _console_fallback(to: str, subject: str, otp: str | None = None) -> None:
    """
    Print email details to console when SMTP is unavailable.
    Only active in development mode — never in production.
    """
    border = "═" * 60
    print(f"\n{border}", file=sys.stderr)
    print(f"  📧  DEV MODE — Email could not be sent via SMTP", file=sys.stderr)
    print(f"{border}", file=sys.stderr)
    print(f"  To      : {to}", file=sys.stderr)
    print(f"  Subject : {subject}", file=sys.stderr)
    if otp:
        print(f"  OTP     : ➜  {otp}  ◀  USE THIS CODE", file=sys.stderr)
    print(f"{border}\n", file=sys.stderr)


class EmailService:
    """Async email sending service. Falls back to console in dev mode."""

    async def _send(
        self,
        to: str,
        subject: str,
        html: str,
        otp: str | None = None,
    ) -> bool:
        """Send an HTML email via SMTP. On failure in dev, logs OTP to console."""
        # ── Validate SMTP credentials are configured ─────────
        if not settings.SMTP_EMAIL or not settings.SMTP_PASSWORD:
            logger.warning("SMTP credentials not set — email not sent")
            if not settings.is_production and otp:
                _console_fallback(to, subject, otp)
            return False

        try:
            msg = MIMEMultipart("alternative")
            msg["From"] = f"CRM System <{settings.SMTP_EMAIL}>"
            msg["To"] = to
            msg["Subject"] = subject
            msg.attach(MIMEText(html, "html"))

            await aiosmtplib.send(
                msg,
                hostname=settings.SMTP_SERVER,
                port=settings.SMTP_PORT,
                username=settings.SMTP_EMAIL,
                password=settings.SMTP_PASSWORD,
                start_tls=True,
                timeout=10,
            )
            logger.info(f"✉  Email sent → {to}: {subject}")
            return True

        except aiosmtplib.SMTPAuthenticationError as e:
            logger.error(
                f"✗ Gmail SMTP auth failed for {settings.SMTP_EMAIL}. "
                f"Make sure you are using a Gmail App Password, not your regular password. "
                f"Error: {e}"
            )
            if not settings.is_production and otp:
                _console_fallback(to, subject, otp)
            return False

        except aiosmtplib.SMTPConnectError as e:
            logger.error(f"✗ Cannot connect to SMTP server {settings.SMTP_SERVER}:{settings.SMTP_PORT} — {e}")
            if not settings.is_production and otp:
                _console_fallback(to, subject, otp)
            return False

        except Exception as e:
            logger.error(f"✗ Failed to send email → {to}: {e}")
            if not settings.is_production and otp:
                _console_fallback(to, subject, otp)
            return False

    async def send_otp_email(
        self,
        email: str,
        otp: str,
        purpose: OTPPurpose = OTPPurpose.EMAIL_VERIFICATION,
    ) -> bool:
        """Send an OTP email. Subject and heading differ by purpose."""
        if purpose == OTPPurpose.PASSWORD_RESET:
            subject = "Your Password Reset Code — CRM"
            heading = "Password Reset"
            intro = "Use the following OTP to reset your password:"
        else:
            subject = "Verify Your Email — CRM"
            heading = "Email Verification"
            intro = "Use the following OTP to verify your email address:"

        template = _jinja_env.get_template("otp_template.html")
        html = template.render(otp=otp, email=email, heading=heading, intro=intro)
        return await self._send(email, subject, html, otp=otp)

    async def send_welcome_email(self, email: str, full_name: str) -> bool:
        """Send a welcome email after account activation."""
        template = _jinja_env.get_template("welcome_template.html")
        html = template.render(full_name=full_name, email=email)
        return await self._send(email, "Welcome to CRM! 🎉", html)


email_service = EmailService()
