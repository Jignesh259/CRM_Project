"""
Email template loader utility (used by email_service).
"""

from jinja2 import Environment, FileSystemLoader, select_autoescape
from pathlib import Path

_template_dir = Path(__file__).resolve().parent.parent / "templates"

jinja_env = Environment(
    loader=FileSystemLoader(str(_template_dir)),
    autoescape=select_autoescape(["html"]),
)


def render_template(template_name: str, **context) -> str:
    """Render an HTML template with the given context variables."""
    template = jinja_env.get_template(template_name)
    return template.render(**context)
