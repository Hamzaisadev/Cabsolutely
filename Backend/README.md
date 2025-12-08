# Backend API Documentation

## User Registration

### Description

Registers a new user in the system.

### URL

`/user/register`

### Method

`POST`

### Request Body

The request body must be a JSON object with the following properties:

| Field                | Type   | Required | Description                            |
| -------------------- | ------ | -------- | -------------------------------------- |
| `fullname`           | Object | Yes      | Object containing first and last name. |
| `fullname.firstname` | String | Yes      | Minimum 3 characters.                  |
| `fullname.lastname`  | String | No       | Minimum 3 characters (if provided).    |
| `email`              | String | Yes      | Must be a valid email address.         |
| `password`           | String | Yes      | Minimum 6 characters.                  |
| `phone`              | String | Yes      | Minimum 10 characters.                 |

#### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "phone": "1234567890"
}
```

### Success Response

**Code:** `201 Created`

**Content:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "__v": 0
  }
}
```

### Error Responses

#### Validation Error

**Code:** `400 Bad Request`

**Content:**

```json
{
  "errors": [
    {
      "value": "inv",
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

#### Internal Server Error

**Code:** `500 Internal Server Error`

**Content:**

```json
{
  "message": "Internal Server Error"
}
```

## User Login

### Description

Authenticates a user and returns an authentication token.

### URL

`/user/login`

### Method

`POST`

### Request Body

The request body must be a JSON object with the following properties:

| Field      | Type   | Required | Description                    |
| ---------- | ------ | -------- | ------------------------------ |
| `email`    | String | Yes      | Must be a valid email address. |
| `password` | String | Yes      | Minimum 6 characters.          |

#### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Success Response

**Code:** `200 OK`

**Content:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "__v": 0
  }
}
```

### Error Responses

#### Validation Error

**Code:** `400 Bad Request`

**Content:**

```json
{
  "errors": [
    {
      "value": "invalid-email",
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Invalid Credentials

**Code:** `401 Unauthorized`

**Content:**

```json
{
  "message": "Invalid email or password"
}
```

#### Internal Server Error

**Code:** `500 Internal Server Error`

**Content:**

```json
{
  "message": "Internal Server Error"
}
```
