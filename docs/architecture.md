# Architecture

## Project Structure
backend/
 ├─ app.js
 ├─ server.js
 ├─ routes/
 ├─ controllers/
 ├─ services/
 ├─ repositories/
 ├─ models/
 ├─ middlewares/
 ├─ tests/
 └─ validators/



## Layered Architecture
Request
→ Routes
→ Validator
→ Middlewares (validate)
→ Controllers
→ Services
→ Repositories
→ Db (Database)


Routes:
Defines API endpoints and attaches validators and middlewares.

Validator:
Handles request input validation (body, params, query).
Ensures data correctness before reaching the business logic layer.

Middlewares:
Handles cross-cutting concerns such as authentication, authorization, and error handling.

Controllers:
Handles HTTP requests and responses.
Acts as a thin layer that delegates business logic to services.

Services:
Contains core business logic such as authentication, password hashing, token generation, 
and domain rules.

Repositories:
Abstracts database access and data persistence logic.

Models:
Defines database schemas and data structures
