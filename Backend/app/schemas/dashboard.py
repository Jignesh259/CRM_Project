from pydantic import BaseModel

from app.schemas.activity import ActivityItem


class DashboardMetric(BaseModel):
    label: str
    value: str
    change: str
    trend: str


class RevenuePoint(BaseModel):
    month: str
    revenue: int
    target: int


class PipelineStage(BaseModel):
    stage: str
    count: int


class DashboardResponse(BaseModel):
    metrics: list[DashboardMetric]
    revenue: list[RevenuePoint]
    pipeline: list[PipelineStage]
    activities: list[ActivityItem]


class RegionPerformance(BaseModel):
    region: str
    revenue: int
    customers: int


class TopProduct(BaseModel):
    name: str
    sales: int
    margin: int


class AnalyticsResponse(BaseModel):
    winRate: float
    customerGrowth: float
    recurringRevenue: int
    regionPerformance: list[RegionPerformance]
    topProducts: list[TopProduct]
