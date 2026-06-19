from dataclasses import dataclass
from typing import Literal

ActivityType = Literal["lead", "invoice", "task", "system"]


@dataclass
class UserRecord:
    name: str
    email: str
    company: str
    password_hash: str
