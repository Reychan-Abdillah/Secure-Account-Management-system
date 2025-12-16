# Authentication Flow

## Overview
This document explains how authentication and authorization
work in the system using JWT.

---

## 1. User Registration Flow
1. User submits email and password
2. Server validates input
3. Password is hashed using bcrypt 
4. User data is stored in database
5. Verification email is sent

---

## 2. Login Flow
1. User submits email and password
2. Server validates credentials
3. Server generates:
   - Access Token (15 minutes)
   - Refresh Token (7 days)
4. Tokens are returned to client

---

## 3. Access Protected Resouzrce
1. Client sends access token via Authorization header
2. Server verifies token
3. If valid → request allowed
4. If expired → return 401 Unauthorized

---

## 4. Token Refresh Flow
1. Client sends refresh token
2. Server verifies refresh token
3. Server issues a new access token
4. Old access token becomes invalid

---

## 5. Logout Flow
1. Client sends logout request
2. Server invalidates refresh token
3. Client removes stored tokens

---

## 6. Security Notes
- Access token is short-lived to reduce risk
- Refresh token is stored securely
- Tokens are signed and verified using secret keys
