# Backend Structure

This backend now follows a layered FastAPI structure:

- `app/main.py`: application factory and middleware
- `app/api/`: route registration
- `app/api/v1/endpoints/`: versioned route handlers
- `app/core/`: config, security, and dependency wiring
- `app/db/`: seeded mock store for local development
- `app/models/`: domain entities
- `app/repositories/`: data access layer
- `app/schemas/`: request and response models
- `app/services/`: business logic
- `tests/`: API smoke tests

The current persistence layer is an in-memory mock store so the project stays runnable immediately. Replacing it with SQLAlchemy later can be done mostly inside `app/db/` and `app/repositories/`.
