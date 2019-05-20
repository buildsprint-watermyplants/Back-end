# Water My Plants

## API Documentation

| Table | Method |           Endpoint |                      Description |
| ----- | :----: | -----------------: | -------------------------------: |
| users |  POST  | /api/auth/register |            Registers a new user. |
| users |  POST  |    /api/auth/login | Logs in already registered user. |

### Auth Routes

#### Register

##### Registers a new user.

Method URL: /api/auth/register

HTTP Method: POST

###### Headers

| Name         |  Type  | Required |              Description |
| ------------ | :----: | -------: | -----------------------: |
| Content-Type | String |      Yes | Must be application/JSON |

###### Body

| Name        |  Type  | Required |     Description |
| ----------- | :----: | -------: | --------------: |
| username    | String |      Yes | Must be unique. |
| password    | String |      Yes |                 |
| phoneNumber | String |       No |                 |

###### Example

```
{
"username": "plantlover",
"password": "plants,
"phoneNumber": "5555555555"
}
```

###### Response

201

400

500

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

200

400

500

### User Routes

#### Get Users

##### Gets a list of users.

#### Get User

##### Gets user by ID.

#### Delete User

##### Deletes user by ID.

#### Update User

##### Updates user by ID.
