# API Specification

## Authentication

### POST /api/auth/register
Request:
```json
{
  "email": "user@mail.com",
  "password": "secret123"
}



response 201
{
  "success": true,
  "message": "User registered"
}


Response 400
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email"
  }
}

endpoint
## User Collection
- email (unique)
- passwordHash
- role
- status
- createdAt
- updatedAt

## RefreshToken Collection
- userId
- tokenHash
- expiresAt
- revoked

## AuditLog Collection
- userId
- action
- createdAt