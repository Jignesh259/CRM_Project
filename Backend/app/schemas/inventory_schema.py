"""
Pydantic schemas for Inventory CRUD.
"""

from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime
from uuid import UUID


# ── Category & Brand Schemas ─────────────────────────────────────

class CategoryBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    description: Optional[str] = None

class CategoryResponse(CategoryBase):
    id: str
    class Config:
        from_attributes = True

class BrandBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    description: Optional[str] = None

class BrandResponse(BrandBase):
    id: str
    class Config:
        from_attributes = True


# ── Product Schemas ──────────────────────────────────────────────

class ProductBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    sku: str = Field(..., min_length=1, max_length=100)
    description: Optional[str] = None
    
    cost: float = Field(0.0, ge=0)
    retail: float = Field(0.0, ge=0)
    
    initialStock: int = Field(0, ge=0) # Note: Frontend uses camelCase 'initialStock'
    lowStock: int = Field(10, ge=0)    # Frontend uses 'lowStock'
    
    category: str = Field("Uncategorized", max_length=100)
    brand: str = Field("Generic", max_length=100)
    
    status: str = Field("Active", max_length=50)
    image: Optional[str] = None
    
    specs: Optional[Dict[str, Any]] = Field(default_factory=dict)
    supplier: Optional[Dict[str, Any]] = Field(default_factory=dict)


class ProductCreate(ProductBase):
    id: Optional[str] = None # Allow client to provide custom ID like 'prod_123'


class ProductUpdate(BaseModel):
    name: Optional[str] = Field(None, min_length=1, max_length=200)
    sku: Optional[str] = Field(None, min_length=1, max_length=100)
    description: Optional[str] = None
    cost: Optional[float] = Field(None, ge=0)
    retail: Optional[float] = Field(None, ge=0)
    initialStock: Optional[int] = Field(None, ge=0)
    lowStock: Optional[int] = Field(None, ge=0)
    category: Optional[str] = Field(None, max_length=100)
    brand: Optional[str] = Field(None, max_length=100)
    status: Optional[str] = Field(None, max_length=50)
    image: Optional[str] = None
    specs: Optional[Dict[str, Any]] = None
    supplier: Optional[Dict[str, Any]] = None


class ProductResponse(ProductBase):
    id: str
    created_by_id: Optional[UUID] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class ProductListResponse(BaseModel):
    products: List[ProductResponse]
    total: int
    page: int
    per_page: int
