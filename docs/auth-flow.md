# Authentication Flow

## Overview

This document describes how authentication and authorization
are implemented in the system using JWT-based authentication.

---

## 1. User Registration Flow

1. User submits email and password
2. Server validates request input
3. Password is hashed using bcrypt
4. User data is stored in the database

---

## 2. Login Flow

1. User submits email and password
2. Server validates credentials
3. Server generates:
   - Access Token (15 minutes)
   - Refresh Token (7 days)
4. Access token is returned in the response body
5. Refresh token is stored in an HTTP-only cookie

---

## 3. Access Protected Resources

1. Client sends access token via Authorization header
2. Server verifies the access token
3. If valid → request is allowed
4. If expired or invalid → server returns 401 Unauthorized

---

## 4. Token Refresh Flow

1. Client sends request to refresh endpoint
2. Server reads refresh token from HTTP-only cookie
3. Server verifies refresh token
4. Server issues a new access token

---

## 5. Logout Flow

1. Client sends logout request
2. Server clears refresh token cookie
3. Client removes stored access token

---

## 6. Security Notes

- Access tokens are short-lived to reduce exposure risk
- Refresh tokens are stored in HTTP-only cookies
- Tokens are signed and verified using secret keys
- Passwords are never stored in plain text
