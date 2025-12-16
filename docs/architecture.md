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
 └─ tests/


## Layered Architecture
Request
→ Route
→ Controller
→ Service
→ Repository
→ Database

Route: mendefinisikan endpoint dan middleware  
Controller: menangani HTTP request & response  
Service: berisi business logic aplikasi  
Repository: abstraksi akses database  
Model: definisi schema dan struktur data  
Middleware: validasi, autentikasi, error handling  

## Why Service Layer?
- Logic tidak bercampur dengan HTTP
- Mudah diuji dengan unit testing
- Mudah dikembangkan dan dirawat
