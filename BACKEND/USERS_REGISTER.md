# POST /users/register — Request Data

Fields and requirements

- `fullname` (object) — required
  - `firstname` (string) — required; minimum 2 characters. Example: "Jane"
  - `lastname` (string) — optional; minimum 2 characters. Example: "Doe"

- `email` (string) — required; must be a valid email address. Example: "jane.doe@example.com"

- `password` (string) — required; minimum 6 characters. Example: "secret123"

Example payload

{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "secret123"
}

Validation notes
- The route uses express-validator to validate `email`, `fullName`/`fullname`, and `password`. Ensure the exact body keys match the implementation (current controller expects `fullname`).
- On validation failure the endpoint returns `400` and a JSON body `{ errors: [...] }` listing validation issues.

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
    "email": "jane.doe@example.com"
  }
}

- 400 Bad Request

{
  "errors": [
    { "msg": "Password must be at least 6 characters long", "param": "password", "location": "body" }
  ]
}

- 409 Conflict

{
  "error": "Email already in use"
}
