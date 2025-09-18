# JWT Documentation

This document describes how JWT (JSON Web Token) is used in the PrepTrack backend for authentication.

## Overview
JWT is used to securely transmit user identity and session information between the client and server. Tokens are signed using a secret key and have an expiration time.

## Token Generation
- Implemented in `src/service/JwtService.ts`.
- Uses `jsonwebtoken` library.
- Payload includes: `email`, `role`, and `userId`.
- Secret key: `preptrack` (should be stored securely in production).
- Token expires in 1 hour.

## Usage
- Token is generated after successful login.
- Sent to the client and stored (usually in localStorage or cookies).
- Client sends the token in the `Authorization` header for protected routes.

## Related Files
- `src/service/JwtService.ts`
- `src/service/AuthService.ts`
- `src/middleware/AuthMiddleware.ts`
