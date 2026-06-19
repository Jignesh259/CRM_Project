from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "CommSync CRM API"
    app_version: str = "0.1.0"
    api_prefix: str = "/api"
    frontend_origin: str = "http://localhost:5173"
    demo_otp: str = "123456"

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")


settings = Settings()
