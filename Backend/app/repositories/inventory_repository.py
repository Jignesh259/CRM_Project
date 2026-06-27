"""
Inventory repository — CRUD operations on products, categories, and brands.

MULTI-TENANCY GUARANTEE:
  Every method that reads, counts, or mutates requires `company_id`.
"""

from sqlalchemy.orm import Session
from sqlalchemy import or_
from app.models.inventory_model import Product, ProductCategory, ProductBrand
from typing import Optional, List
from uuid import UUID


class InventoryRepository:
    def __init__(self, db: Session):
        self.db = db

    # ── Products ──────────────────────────────────────────────────

    def _product_tenant_query(self, company_id: UUID):
        return self.db.query(Product).filter(Product.company_id == company_id)

    def get_product_by_id(self, product_id: str, company_id: UUID) -> Optional[Product]:
        return (
            self._product_tenant_query(company_id)
            .filter(Product.id == product_id)
            .first()
        )

    def get_products(
        self,
        company_id: UUID,
        skip: int = 0,
        limit: int = 100,
        search: Optional[str] = None,
        category: Optional[str] = None,
        status: Optional[str] = None,
    ) -> List[Product]:
        query = self._product_tenant_query(company_id)

        if status:
            query = query.filter(Product.status == status)
        
        if category:
            query = query.filter(Product.category == category)

        if search:
            search_filter = or_(
                Product.name.ilike(f"%{search}%"),
                Product.sku.ilike(f"%{search}%"),
                Product.brand.ilike(f"%{search}%"),
            )
            query = query.filter(search_filter)

        return query.order_by(Product.created_at.desc()).offset(skip).limit(limit).all()

    def count_products(
        self,
        company_id: UUID,
        search: Optional[str] = None,
        category: Optional[str] = None,
        status: Optional[str] = None,
    ) -> int:
        query = self._product_tenant_query(company_id)

        if status:
            query = query.filter(Product.status == status)
        if category:
            query = query.filter(Product.category == category)
        if search:
            search_filter = or_(
                Product.name.ilike(f"%{search}%"),
                Product.sku.ilike(f"%{search}%"),
                Product.brand.ilike(f"%{search}%"),
            )
            query = query.filter(search_filter)

        return query.count()

    def create_product(self, product: Product) -> Product:
        self.db.add(product)
        self.db.commit()
        self.db.refresh(product)
        return product

    def update_product(self, product: Product, updates: dict) -> Product:
        for key, value in updates.items():
            if value is not None:
                # Map camelCase to snake_case for DB
                if key == 'initialStock':
                    key = 'initial_stock'
                if key == 'lowStock':
                    key = 'low_stock'
                setattr(product, key, value)
        self.db.commit()
        self.db.refresh(product)
        return product

    def delete_product(self, product: Product) -> None:
        self.db.delete(product)
        self.db.commit()


    # ── Categories & Brands ───────────────────────────────────────

    def get_category_by_id(self, id: str, company_id: UUID) -> Optional[ProductCategory]:
        return self.db.query(ProductCategory).filter(
            ProductCategory.id == id,
            ProductCategory.company_id == company_id
        ).first()

    def get_categories(self, company_id: UUID) -> List[ProductCategory]:
        return self.db.query(ProductCategory).filter(
            or_(ProductCategory.company_id == company_id, ProductCategory.company_id.is_(None))
        ).order_by(ProductCategory.name).all()

    def create_category(self, category: ProductCategory) -> ProductCategory:
        self.db.add(category)
        self.db.commit()
        self.db.refresh(category)
        return category

    def update_category(self, category: ProductCategory, updates: dict) -> ProductCategory:
        for key, value in updates.items():
            if value is not None:
                setattr(category, key, value)
        self.db.commit()
        self.db.refresh(category)
        return category

    def delete_category(self, category: ProductCategory) -> None:
        self.db.delete(category)
        self.db.commit()

    def get_brand_by_id(self, id: str, company_id: UUID) -> Optional[ProductBrand]:
        return self.db.query(ProductBrand).filter(
            ProductBrand.id == id,
            ProductBrand.company_id == company_id
        ).first()

    def get_brands(self, company_id: UUID) -> List[ProductBrand]:
        return self.db.query(ProductBrand).filter(
            or_(ProductBrand.company_id == company_id, ProductBrand.company_id.is_(None))
        ).order_by(ProductBrand.name).all()

    def create_brand(self, brand: ProductBrand) -> ProductBrand:
        self.db.add(brand)
        self.db.commit()
        self.db.refresh(brand)
        return brand

    def update_brand(self, brand: ProductBrand, updates: dict) -> ProductBrand:
        for key, value in updates.items():
            if value is not None:
                setattr(brand, key, value)
        self.db.commit()
        self.db.refresh(brand)
        return brand

    def delete_brand(self, brand: ProductBrand) -> None:
        self.db.delete(brand)
        self.db.commit()
