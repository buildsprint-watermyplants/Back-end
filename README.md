# Water My Plants

## Table of Contents

- [Dummy Data](#dummy-data)
- [Auth Routes](#auth-routes)
  - [Register User](#register)
  - [Login User](#login)
- [User Routes](#user-routes)
  - [Get Users](#get-users)
  - [Get User](#get-user)
  - [Update Users](#update-user)
  - [Delete User](#delete-user)
- [Plant Routes](#plant-routes)
  - [Create Plant](#create-plant)
  - [Get Plants](#get-plants)
  - [Get Plant](#get-plant)
  - [Update Plants](#update-plant)
  - [Delete Plants](#delete-plant)
- [Twilio Routes](#twilio-routes)
  - [Create Reminder](#create-reminder)
  - [Get Reminders](#get-reminders)
  - [Get Reminder](#get-reminder)
  - [Update Reminder](#update-reminder)
  - [Delete Reminder](#delete-reminder)

## API Documentation

### Dummy Data

#### Test user with plants.

```
{
    "id": 1,
    "username": "admin",
    "password": "password",
    "phoneNumber": "5555555555",
    "plants": [
        {
            "id": 1,
            "plantName": "Watermelon",
            "dailyWaterTime": "08:00:00",
            "user_id": 1
        },
        {
            "id": 2,
            "plantName": "Tomato",
            "dailyWaterTime": "09:00:00",
            "user_id": 1
        },
        {
            "id": 3,
            "plantName": "Sunflower",
            "dailyWaterTime": "10:00:00",
            "user_id": 1
        }
    ]
}
```

# Auth Routes

| Table | Method |           Endpoint |                      Description |
| ----- | :----: | -----------------: | -------------------------------: |
| users |  POST  | /api/auth/register |            Registers a new user. |
| users |  POST  |    /api/auth/login | Logs in already registered user. |

## Register

### Registers a new user.

_Method URL:_ `/api/auth/register`

_HTTP Method:_ **[POST]**

#### Headers

| Name           |  Type  | Required |              Description |
| -------------- | :----: | -------: | -----------------------: |
| `Content-Type` | String |      Yes | Must be application/JSON |

#### Body

| Name          |  Type  | Required |     Description |
| ------------- | :----: | -------: | --------------: |
| `username`    | String |      Yes | Must be unique. |
| `password`    | String |      Yes |                 |
| `phoneNumber` | String |       No |                 |

#### Example

```
{
"username": "plantlover",
"password": "plants,
"phoneNumber": "5555555555"
}
```

#### Response

##### 201 (Created)

> If you successfully register a user, the endpoint will return an HTTP response with a status code `201`.

##### 400 (Bad Request)

> If you are missing a username or a password, the endpoint will return an HTTP response with a status code of `400`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Login

### Logs in already registered user.

_Method URL:_ `/api/auth/login`

_HTTP Method:_ **[POST]**

#### Headers

| Name           |  Type  | Required |              Description |
| -------------- | :----: | -------: | -----------------------: |
| `Content-Type` | String |      Yes | Must be application/JSON |

#### Body

| Name       |  Type  | Required |                                             Description |
| ---------- | :----: | -------: | ------------------------------------------------------: |
| `username` | String |      Yes |                        Must match username in database. |
| `password` | String |      Yes | Must match password to corresponding email in database. |

#### Example

```
{
"username": "plantlover",
"password": "plants
}
```

#### Response

##### 200 (OK)

> If you successfully login, the endpoint will return an HTTP response with a status code `200`.

##### 400 (Bad Request)

> If you are missing a username or a password, the endpoint will return an HTTP response with a status code of `400`.

##### 401 (Unauthorized)

> If you provide invalid credentials, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

# User Routes

## Get Users

### Gets a list of users.

_Method URL:_ `/api/users/`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If users are found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If users are not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Get User

### Gets user by ID with associated plants.

_Method URL:_ `/api/users/:id`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If user with specified ID is found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If user with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Delete User

### Deletes user by ID.

_Method URL:_ `/api/users/:id`

_HTTP Method:_ **[DELETE]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If user with specified ID is found and deleted, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If user with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Update User

### Updates user by ID.

_Method URL:_ `/api/users/:id`

_HTTP Method:_ **[PUT]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Body

| Name          |  Type  | Required |     Description |
| ------------- | :----: | -------: | --------------: |
| `username`    | String |      Yes | Must be unique. |
| `password`    | String |      Yes |                 |
| `phoneNumber` | String |       No |                 |

#### Example

```
{
"username": "plantlover",
"password": "plants,
"phoneNumber": "5555555555"
}
```

#### Response

##### 200 (OK)

> If user with specified ID is found and updated, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If user with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

# Plant Routes

## Create Plant

### Creates a plant with plant name and water time.

_Method URL:_ `/api/plants/`

_HTTP Method:_ **[POST]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Body

| Name             |  Type  | Required | Description |
| ---------------- | :----: | -------: | ----------: |
| `plantName`      | String |      Yes |             |
| `dailyWaterTime` | String |       No |             |

#### Example

```
{
"plantName": "Carrots",
"dailyWaterTime": "08:00:00"
}
```

#### Response

##### 201 (Created)

> If plant is created, the endpoint will return an HTTP response with a status code `201`.

##### 400 (Bad Request)

> If you are missing a plant name, the endpoint will return an HTTP response with a status code of `400`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Get Plants

### Gets a list of plants.

_Method URL:_ `/api/plants/`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If plant are found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If plants are not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Get Plant

### Gets plant by ID.

_Method URL:_ `/api/plants/:id`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If plant with specified ID is found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If plant with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Update Plant

### Updates plant by ID.

_Method URL:_ `/api/plants/:id`

_HTTP Method:_ **[PUT]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Body

| Name             |  Type  | Required |           Description |
| ---------------- | :----: | -------: | --------------------: |
| `plantName`      | String |      Yes |                       |
| `dailyWaterTime` | String |       No | Formatted as HH:MM:SS |

#### Example

```
{
"plantName": "Tulips",
"dailyWaterTime": "09:30:00"
}
```

#### Response

##### 200 (OK)

> If plant with specified ID is found and updated, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If plant with specified ID is not found and updated, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Delete Plant

### Deletes plant by ID.

_Method URL:_ `/api/plants/:id`

_HTTP Method:_ **[DELETE]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If plant with specified ID is found and deleted, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If plant with specified ID is not found and deleted, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

# Twilio Routes

## Create Reminder

### Creates a reminder with a plantName, phoneNumber, timeZone, and time.

_Method URL:_ `/api/twilio/`

_HTTP Method:_ **[POST]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Body

| Name          |  Type  | Required |              Example |
| ------------- | :----: | -------: | -------------------: |
| `plantName`   | String |      Yes |          'Sunflower' |
| `phoneNumber` | String |      Yes |         '5551234567' |
| `timeZone`    | String |      Yes |    'America/Phoenix' |
| `time`        |  Date  |      Yes | '05-23-2019 11:30am' |

#### Example

```
{
	"plantName": "Sunflower",
	"timeZone": "America/Phoenix",
	"time": "11:30am",
	"phoneNumber": "5551234567"
}
```

#### Response

##### 201 (Created)

> If reminder is created, the endpoint will return an HTTP response with a status code `201`.

##### 400 (Bad Request)

> If you enter an invalid phone number, the endpoint will return an HTTP response with a status code of `400`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Get Reminders

### Gets reminders for user.

_Method URL:_ `/api/twilio/`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If reminders are found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If reminders are not found, the endpoint will return an HTTP response with a status code of `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Get Reminder

### Gets reminder by ID.

_Method URL:_ `/api/twilio/:id`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If reminder with specified ID is found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If reminder with specified ID is not found, the endpoint will return an HTTP response with a status code of `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Update Reminder

### Updates reminder by ID.

_Method URL:_ `/api/twilio/:id`

_HTTP Method:_ **[PUT]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Body

| Name          |  Type  | Required |              Example |
| ------------- | :----: | -------: | -------------------: |
| `plantName`   | String |      Yes |          'Sunflower' |
| `phoneNumber` | String |      Yes |         '5551234567' |
| `timeZone`    | String |      Yes |    'America/Phoenix' |
| `time`        |  Date  |      Yes | '05-23-2019 11:30am' |

#### Example

```
{
	"plantName": "Sunflower",
	"timeZone": "America/Pacific",
	"time": "11:50am",
	"phoneNumber": "5551234567"
}
```

#### Response

##### 200 (OK)

> If reminders with specified ID is updated, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If reminders with specified ID is not found, the endpoint will return an HTTP response with a status code of `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Delete Reminder

### Deletes reminder by ID.

_Method URL:_ `/api/twilio/:id`

_HTTP Method:_ **[DELETE]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If reminder with specified ID is deleted, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If reminder with specified ID is not found, the endpoint will return an HTTP response with a status code of `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.
