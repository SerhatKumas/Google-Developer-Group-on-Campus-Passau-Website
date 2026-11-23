# Rule 04: Backend & API Standards

## 1. Directory & Routing Convention
- All backend route handlers reside in `src/app/api/<resource>/route.ts`.
- Follow strict RESTful resource conventions.

## 2. Request Validation (Zod)
- Every POST/PUT/PATCH request **MUST validate incoming JSON payloads using `zod`** schemas.
- Reject invalid payloads immediately with `400 Bad Request` and structured issue details.

## 3. Standard JSON Response Envelope
All API endpoints must return a standardized JSON structure:
```typescript
// Success
{
  "success": true,
  "data": { ... },
  "message": "Optional human-readable confirmation"
}

// Error
{
  "success": false,
  "error": "Error message for UI",
  "details": [ ... ] // Optional Zod issue array
}
```

## 4. Status Codes
- `200 OK`: Successful read or update.
- `201 Created`: Successful entity creation (e.g. event RSVP, new inquiry).
- `400 Bad Request`: Validation failure.
- `401 Unauthorized`: Missing or invalid authentication token.
- `403 Forbidden`: Authenticated user lacks required role.
- `404 Not Found`: Entity slug or ID does not exist.
- `500 Internal Server Error`: Unhandled server exception.
