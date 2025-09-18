# Authentication Documentation

This document explains the authentication flow in the PrepTrack backend.

## Overview
Authentication is handled using email and password. Passwords are securely hashed using bcrypt before storage. JWT tokens are issued upon successful login for session management.

## Sign Up
- Checks if a user with the given email exists.
- Hashes the password using bcrypt.
- Stores the new user in the database.

## Sign In
- Finds the user by email.
- Verifies the password using bcrypt's compare function.
- Issues a JWT token if authentication succeeds.

## Error Handling
- Returns null if the user does not exist or the password is incorrect.
- Sends appropriate error messages to the client.

## Related Files
- `src/service/AuthService.ts`
- `src/controller/AuthController.ts`
- `src/model/UserModel.ts`
