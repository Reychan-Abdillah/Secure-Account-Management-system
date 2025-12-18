# API Specification

## Authentication Endpoints

- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/refresh
- POST /api/auth/update-password

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
  "accessToken": "string"
}
```

### Description

return when the email is empty

```json
{
  "message": "Email is required"
}
```

### Description

return when the password is empty

````json
{
  "message": "Password is required"
}


### Response 401 Unauthorized

Returned when the email or password is incorrect.

```json
{
  "message": "Invalid credentials"
}
````

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

```json
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

```json
{
  "message": "Password must be at least 6 characters"
}
```

### Description

return when the email is empty

```json
{
  "message": "Email is required"
}
```

### Description

return when the password is empty

```json
{
  "message": "Password is required"
}
```

### Description

return when email format is wrong

```json
{
  "message": "Invalid email format"
}
```

### Response 500 Internal Server Error

### Description

Returned when an unexpected server error occurs.

```json
{
  "message": "Internal server error"
}
```

---

### POST /api/auth/logout

### Description

Invalidate refresh token and logout user.

### Response 200 OK

```json
{
  "message": "Logout successful"
}
```

---

### POST /api/auth/refresh

### response 200 ok

```json
{
  "accessToken": "string"
}
```

### Response 401 unauthorized

### Description

when no refresh token is provided

```json
{
  "message": "No refresh token"
}
```

### Description

when the refresh token is invalid or expired

```json
{
  "message": "Invalid refresh token"
}
```

### Response 500 Internal server error

### Description

Returned when an unexpected server error occurs.

```json
{
  "message": "internal server error"
}
```

---

### POST /api/auth/update-password

Authorization: Bearer <accessToken>
Content-Type: application/json

### Response 400 Bad Request

### Description

return when old password or new password is empty

```json
{
  "message": "Old and new password are required"
}
```

### Description

return when new password is less than 6 characters

```json
{
  "message": "New password must be at least 6 characters"
}
```


### Response error.statusCode || 500
### Description 


### Response 200 Ok

```json
{
  "message": "Password updated successfully"
}
```
