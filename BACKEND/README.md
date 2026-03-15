# Users API

## POST /users/register

Description
- Register a new user and return an authentication token.

HTTP
- Method: POST
- URL: /users/register

Request Body (JSON)

Example:

{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "secret123"
}

Validation (what the endpoint expects)
- `fullname.firstname`: string, required, minimum 2 characters
- `fullname.lastname`: string, optional, minimum 2 characters
- `email`: string, required, valid email format
- `password`: string, required, minimum 6 characters

Responses
- 201 Created: Registration successful. Returns JSON: `{ token, user }` (token is a JWT, `user` excludes the password field).
- 400 Bad Request: Validation failed. Returns `{ errors: [...] }`.
- 409 Conflict: Email already in use (database unique constraint).
- 500 Internal Server Error: Unexpected server error.

Notes
- The code expects the `fullname` object in the request body (with `firstname` and `lastname`).
- Passwords are hashed before storage; the returned `user` object will not include the password.

Example responses

- 201 Created

{
  "token": "<jwt_token_here>",
  "user": {
    "_id": "60f8c2f9a2b4c123456789ab",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "socketId": null
  }
}

- 400 Bad Request (validation errors)

{
  "errors": [
    { "msg": "Invalid email address", "param": "email", "location": "body" }
  ]
}

- 409 Conflict (email already exists)

{
  "error": "Email already in use"
}

- 500 Internal Server Error

{
  "error": "Internal server error"
}
