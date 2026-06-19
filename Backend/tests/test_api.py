from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_endpoint() -> None:
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_login_endpoint() -> None:
    response = client.post(
        "/api/auth/login",
        json={"email": "admin@commsync.io", "password": "demo1234"},
    )
    assert response.status_code == 200
    payload = response.json()
    assert payload["success"] is True
    assert payload["nextPath"] == "/dashboard"


def test_dashboard_endpoint() -> None:
    response = client.get("/api/dashboard")
    assert response.status_code == 200
    payload = response.json()
    assert len(payload["metrics"]) == 4
    assert len(payload["activities"]) >= 1
