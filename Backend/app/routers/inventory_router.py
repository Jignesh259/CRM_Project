"""
Inventory router — Product CRUD endpoints.
"""

from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from uuid import UUID
from typing import Optional
import time
from app.core.dependencies import get_db, get_current_active_user
from app.repositories.inventory_repository import InventoryRepository
from app.models.inventory_model import Product, ProductCategory, ProductBrand
from app.schemas.inventory_schema import ProductCreate, ProductUpdate
from app.utils.response_utils import success_response

router = APIRouter(prefix="/api/inventory", tags=["Inventory"])


def serialize_product(product: Product) -> dict:
    return {
        "id": product.id,
        "company_id": str(product.company_id) if product.company_id else None,
        "name": product.name,
        "sku": product.sku,
        "description": product.description,
        "cost": product.cost,
        "retail": product.retail,
        "stock": product.initial_stock,
        "initialStock": product.initial_stock,
        "lowStock": product.low_stock,
        "category": product.category,
        "brand": product.brand,
        "status": product.status,
        "image": product.image,
        "specs": product.specs if product.specs else {},
        "supplier": product.supplier if product.supplier else {},
        "created_by_id": str(product.created_by_id) if product.created_by_id else None,
        "created_at": product.created_at.isoformat() if product.created_at else None,
        "updated_at": product.updated_at.isoformat() if product.updated_at else None,
    }


# ── GET /api/inventory/products ─────────────────────────────────

@router.get("/products")
def list_products(
    page: int = Query(1, ge=1),
    per_page: int = Query(20, ge=1, le=1000),
    search: Optional[str] = Query(None),
    category: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = InventoryRepository(db)
    skip = (page - 1) * per_page
    products = repo.get_products(
        company_id=company_id,
        skip=skip,
        limit=per_page,
        search=search,
        category=category,
        status=status,
    )
    total = repo.count_products(company_id=company_id, search=search, category=category, status=status)

    return success_response(
        data={
            "products": [serialize_product(p) for p in products],
            "total": total,
            "page": page,
            "per_page": per_page,
        }
    )


# ── POST /api/inventory/products ────────────────────────────────

@router.post("/products", status_code=status.HTTP_201_CREATED)
def create_product(
    body: ProductCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = InventoryRepository(db)
    product_data = body.model_dump()
    
    prod_id = product_data.pop("id", None)
    if not prod_id:
        prod_id = f"prod_{int(time.time()*1000)}"

    # Map camelCase from Pydantic schema to snake_case for SQLAlchemy model
    initial_stock = product_data.pop("initialStock", 0)
    low_stock = product_data.pop("lowStock", 10)

    product = Product(
        id=prod_id,
        initial_stock=initial_stock,
        low_stock=low_stock,
        **product_data,
        company_id=company_id,
        created_by_id=current_user.id,
    )
    created = repo.create_product(product)

    return success_response(
        data=serialize_product(created),
        message="Product created successfully",
        status_code=201,
    )


# ── GET /api/inventory/products/{product_id} ────────────────────

@router.get("/products/{product_id}")
def get_product(
    product_id: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = InventoryRepository(db)
    product = repo.get_product_by_id(product_id, company_id=company_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    return success_response(data=serialize_product(product))


# ── PUT /api/inventory/products/{product_id} ────────────────────

@router.put("/products/{product_id}")
def update_product(
    product_id: str,
    body: ProductUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = InventoryRepository(db)
    product = repo.get_product_by_id(product_id, company_id=company_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    updates = body.model_dump(exclude_unset=True)
    updated = repo.update_product(product, updates)

    return success_response(
        data=serialize_product(updated),
        message="Product updated successfully",
    )


# ── DELETE /api/inventory/products/{product_id} ─────────────────

@router.delete("/products/{product_id}")
def delete_product(
    product_id: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = InventoryRepository(db)
    product = repo.get_product_by_id(product_id, company_id=company_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    repo.delete_product(product)
    return success_response(message="Product deleted successfully")


# ── Categories & Brands ─────────────────────────────────────────

@router.get("/categories")
def get_categories(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = InventoryRepository(db)
    categories = repo.get_categories(company_id=company_id)
    
    # If no categories exist, return defaults
    if not categories:
        defaults = [
            {"id": "cat_servers", "name": "Servers"},
            {"id": "cat_networking", "name": "Networking Equipment"},
            {"id": "cat_storage", "name": "Storage Arrays"},
            {"id": "cat_components", "name": "Components"},
        ]
        return success_response(data=defaults)
        
    return success_response(data=[{"id": c.id, "name": c.name} for c in categories])

@router.get("/brands")
def get_brands(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = InventoryRepository(db)
    brands = repo.get_brands(company_id=company_id)
    
    # If no brands exist, return defaults
    if not brands:
        defaults = [
            {"id": "brand_cisco", "name": "Cisco"},
            {"id": "brand_dell", "name": "Dell EMC"},
            {"id": "brand_hp", "name": "HPE"},
            {"id": "brand_lenovo", "name": "Lenovo"},
            {"id": "brand_generic", "name": "Generic"},
        ]
        return success_response(data=defaults)
        
    return success_response(data=[{"id": b.id, "name": b.name} for b in brands])
