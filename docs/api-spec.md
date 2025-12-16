# API Specification

## Authentication Endpoints
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/refresh

---

## POST /api/auth/login
### Description
Authenticate user and return JWT tokens.

### Request Body
```json
{
  "email": "string",
  "password": "string"
}
```
### Response 200 OK
```json
{
  "accessToken": "string",
  "refreshToken": "string"
}
```

### Response 401 Unauthorized
Returned when the email or password is incorrect.
```json
{
  "message": "Invalid credentials"
}
```
---

### POST /api/auth/register

### Description
Register a new user account.

### Request Body
```json
{
  "email": "string",
  "password": "string"
}
```

### Response 201 Created
### Description
Returned when registration is successful.

``` json
{
  "message": "User registered successfully"
}
```

### Response 409 Conflict

### Description
Returned when the email address is already registered.

```json
{
  "message": "Email already registered"
}
```

### Response 400 Bad Request

### Description
Returned when the password is less than 6 characters
``` json
{
  "message": "Password must be at least 6 characters"
}
```

### Response 500 Internal Server Error

### Description
Returned when an unexpected server error occurs.

```json
{
  "message": "Internal server error"
}

---

### POST /api/auth/logout

### Description
Invalidate refresh token and logout user.

### Response 200 OK
``` json
{
  "message": "Logout successful"
}
```

---