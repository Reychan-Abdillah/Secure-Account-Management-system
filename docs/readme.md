# Secure Account Management System

Backend system for managing user accounts securely with authentication,
authorization, and audit logging.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT (Access & Refresh Token)
- Jest & Supertest

## Features
- Authentication (register, login, logout)
- Secure token handling
- Account management
- Audit logging
- Full test coverage

## Installation
```bash
npm install
cp .env.example .env
npm run dev



## Purpose
This document describes the backend architecture of the Secure Account
Management System.

## Architecture Pattern
The project uses a layered architecture:
- Routes
- Controllers
- Services
- Repositories
- Database

## Request Flow
Client → Route → Middleware → Controller → Service → Repository → Database

## Folder Structure
src/
- routes: API routes
- controllers: HTTP request handlers
- services: business logic
- repositories: database access
- middlewares: auth, error handler
- utils: helper functions

## Rules
- Routes must not contain business logic
- Controllers must not access database directly
- Services must be independent of Express
