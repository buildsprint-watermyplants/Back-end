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

#### Login

##### Logs in already registered user.

Method URL: /api/auth/login

HTTP Method: POST

###### Headers

| Name         |  Type  | Required |              Description |
| ------------ | :----: | -------: | -----------------------: |
| Content-Type | String |      Yes | Must be application/JSON |

###### Body

| Name     |  Type  | Required |                                             Description |
| -------- | :----: | -------: | ------------------------------------------------------: |
| username | String |      Yes |                        Must match username in database. |
| password | String |      Yes | Must match password to corresponding email in database. |

###### Example

```
{
"username": "plantlover",
"password": "plants
}
```

###### Response

##### 200 (OK)

> If you successfully login, the endpoint will return an HTTP response with a status code `200`.

##### 400 (Bad Request)

> If you are missing a username or a password, the endpoint will return an HTTP response with a status code of `400`.

##### 401 (Unauthorized)

> If you provide invalid credentials, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

### User Routes

#### Get Users

##### Gets a list of users.

#### Get User

##### Gets user by ID.

#### Update User

##### Updates user by ID.

#### Delete User

##### Deletes user by ID.

### Plant Routes

#### Create Plant

##### Creates a plant with plant name and water time.

#### Get Plants

##### Gets a list of plants.

#### Get Plant

##### Gets plant by ID.

#### Update Plant

##### Updates plant by ID.

#### Delete Plant

##### Deletes plant by ID.
