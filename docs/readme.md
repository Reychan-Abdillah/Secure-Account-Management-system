# Secure Account Management System

## Purpose

A backend system for managing user authentication and account security,
including registration, login, logout, and token-based authentication.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT (Access & Refresh Tokens)

## Core Features

- User registration
- Login & Logout
- JWT-based authentication
- Access & refresh token strategy
- Secure password hashing

## Getting Started

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Configure environment variables

4. Run the development server

npm run dev

## Documentation

Main documentation is located in the `docs/` directory.

- Architecture Overview → docs/architecture.md
- API Specification → docs/api-spec.md
- Authentication Flow → docs/auth-flow.md
- Database Schema → docs/database-schema.md
- Security Practices → docs/security.md
- Testing Strategy → docs/testing.md

## Environment Variables

⚠️ Never commit your real .env file to GitHub.
Use .env.example instead.

The following environment variables are required to run the application:
PORT=3000
JWT_SECRET=your_access_token_secret  
JWT_REFRESH_SECRET=your_refresh_token_secret  
DATABASE_URL=your_database_connection_string  
NODE_ENV=development | production
