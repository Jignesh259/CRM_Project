from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def get_auth_headers(email: str = "admin@commsync.io", password: str = "demo1234"):
    response = client.post(
        "/api/auth/login",
        json={"email": email, "password": password},
    )
    assert response.status_code == 200
    token = response.json()["access_token"]
    return {"Authorization": f"Bearer {token}"}

def test_invoice_endpoints() -> None:
    headers = get_auth_headers()
    
    # 1. List invoices
    response = client.get("/api/invoices", headers=headers)
    assert response.status_code == 200
    payload = response.json()
    assert payload["success"] is True
    assert isinstance(payload["data"], list)

    # 2. Create invoice
    invoice_payload = {
        "customer_name": "Test Customer Inc",
        "subtotal": 1000.0,
        "tax": 180.0,
        "total": 1180.0,
        "status": "Unpaid"
    }
    response = client.post("/api/invoices", json=invoice_payload, headers=headers)
    assert response.status_code == 201
    created_invoice = response.json()["data"]
    assert created_invoice["customerName"] == "Test Customer Inc"
    assert created_invoice["total"] == 1180.0
    invoice_id = created_invoice["id"]

    # 3. Update invoice
    response = client.put(f"/api/invoices/{invoice_id}", json={"status": "Paid"}, headers=headers)
    assert response.status_code == 200
    updated_invoice = response.json()["data"]
    assert updated_invoice["status"] == "Paid"

def test_payment_endpoints() -> None:
    headers = get_auth_headers()

    # 1. List payments
    response = client.get("/api/payments", headers=headers)
    assert response.status_code == 200
    payload = response.json()
    assert payload["success"] is True
    assert isinstance(payload["data"], list)

    # 2. Create payment
    payment_payload = {
        "customer_name": "Test Client",
        "amount": 500.0,
        "method": "Credit Card",
        "status": "Pending"
      }
    response = client.post("/api/payments", json=payment_payload, headers=headers)
    assert response.status_code == 201
    created_payment = response.json()["data"]
    assert created_payment["customerName"] == "Test Client"
    payment_id = created_payment["id"]

    # 3. Update payment
    response = client.put(f"/api/payments/{payment_id}", json={"status": "Completed"}, headers=headers)
    assert response.status_code == 200
    updated_payment = response.json()["data"]
    assert updated_payment["status"] == "Completed"

def test_expense_endpoints() -> None:
    headers = get_auth_headers()

    # 1. List expenses
    response = client.get("/api/expenses", headers=headers)
    assert response.status_code == 200
    payload = response.json()
    assert payload["success"] is True
    assert isinstance(payload["data"], list)

    # 2. Create expense
    expense_payload = {
        "amount": 250.0,
        "category": "IT & Infra",
        "merchant": "AWS",
        "status": "Pending"
    }
    response = client.post("/api/expenses", json=expense_payload, headers=headers)
    assert response.status_code == 201
    created_expense = response.json()["data"]
    assert created_expense["merchant"] == "AWS"
    expense_id = created_expense["id"]

    # 3. Update expense
    response = client.put(f"/api/expenses/{expense_id}", json={"status": "Cleared", "approved_by": "Alex Mercer"}, headers=headers)
    assert response.status_code == 200
    updated_expense = response.json()["data"]
    assert updated_expense["status"] == "Cleared"
    assert updated_expense["approvedBy"] == "Alex Mercer"
