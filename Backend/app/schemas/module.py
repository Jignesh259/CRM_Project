from pydantic import BaseModel


class ModuleStat(BaseModel):
    label: str
    value: str


class ModuleSummary(BaseModel):
    module: str
    title: str
    summary: str
    stats: list[ModuleStat]
    actions: list[str]
