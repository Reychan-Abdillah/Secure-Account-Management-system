# Security

- Password hashing (bcrypt) 
- JWT expiration 
- Rate limiting 
- Input validation 


### Refresh Token Scope
Refresh token is scoped only to refresh endpoint to reduce exposure.
```json

path: "/api/auth/refresh"

``` 