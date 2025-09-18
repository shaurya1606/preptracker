# Middleware Documentation

This document explains the authentication middleware used in the PrepTrack backend.

## Overview
Authentication middleware protects routes by verifying JWT tokens sent by the client. Only requests with valid tokens are allowed to access protected resources.

## How It Works
- Middleware checks for the `Authorization` header in incoming requests.
- Extracts the JWT token from the header.
- Verifies the token using the secret key (`preptrack`).
- If valid, allows the request to proceed.
- If invalid or missing, responds with an authentication error.

## Error Handling
- Responds with 401 Unauthorized if the token is missing or invalid.
- Handles `jwt malformed` and other JWT errors.

## Related Files
- `src/middleware/AuthMiddleware.ts`
- `src/service/JwtService.ts`
