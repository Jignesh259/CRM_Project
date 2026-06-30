"""
Inventory database models.

Multi-tenancy: Every inventory row carries a `company_id` (UUID) that matches
the `company_id` of the User who created it.
"""

import uuid
from sqlalchemy import Column, String, DateTime, ForeignKey, Float, Integer, Text, Boolean, UUID, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base


class ProductCategory(Base):
    __tablename__ = "product_categories"

    id = Column(String(50), primary_key=True)
    company_id = Column(UUID(as_uuid=True), nullable=True, index=True)
    name = Column(String(100), nullable=False)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    def __repr__(self) -> str:
        return f"<ProductCategory {self.name}>"


class ProductBrand(Base):
    __tablename__ = "product_brands"

    id = Column(String(50), primary_key=True)
    company_id = Column(UUID(as_uuid=True), nullable=True, index=True)
    name = Column(String(100), nullable=False)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    def __repr__(self) -> str:
        return f"<ProductBrand {self.name}>"


class Product(Base):
    __tablename__ = "products"

    id = Column(String(50), primary_key=True) # E.g., 'prod_123456789'
    company_id = Column(UUID(as_uuid=True), nullable=False, index=True)

    name = Column(String(200), nullable=False)
    sku = Column(String(100), nullable=False)
    description = Column(Text, nullable=True)
    
    cost = Column(Float, nullable=False, default=0.0)
    retail = Column(Float, nullable=False, default=0.0)
    
    initial_stock = Column(Integer, nullable=False, default=0)
    low_stock = Column(Integer, nullable=False, default=10)
    
    category = Column(String(100), nullable=True, default='Uncategorized')
    brand = Column(String(100), nullable=True, default='Generic')
    
    status = Column(String(50), nullable=False, default="Active") # Active, Inactive
    image = Column(String(255), nullable=True)
    
    specs = Column(JSON, nullable=True) # Arbitrary key-values
    supplier = Column(JSON, nullable=True) # {name, leadTime, moq, lastOrdered}

    created_by_id = Column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )

    created_by = relationship("User", foreign_keys=[created_by_id])

    def __repr__(self) -> str:
        return f"<Product {self.name} sku={self.sku} company_id={self.company_id}>"
