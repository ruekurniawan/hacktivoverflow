# hacktivoverflow

# server

List of users routes :

| ROUTE             | HTTP | HEADER(S) |     BODY     |   DESCRIPTION   |
| ----------------- | ---- | --------- | ------------ | --------------- |
| `/users/register` | **POST** | `none` | `fullname: String (`**`Required`**`), email: String (`**`Required`**`), password: String (`**`Required`**`)` | Create a user |
| `/users/login` | **POST** | `none` | `email: String (`**`Required`**`), password: String (`**`Required`**`)` | Login user |


List of quest routes :

| ROUTE             | HTTP | HEADER(S) |     BODY     |   DESCRIPTION   |
| ----------------- | ---- | --------- | ------------ | --------------- |
| `/quest` | **GET** | `none` | `none` | Get a Question |
| `/quest/:id` | **GET** | `none` | `none` | Get all Question|
| `/quest` | **POST** | `token` | `title: String(`**`Required`**`), description: String(`**`Required`**`)`|  Create Question |
| `/quest/:id` | **PUT** | `token` | `title: String(`**`Required`**`), description: String(`**`Required`**`)`| Update Question |
| `/quest/:id` | **DELETE** | `token` | `none`|  remove one question |



### POST users/register
Success (201)
```
{
    "_id": "5cbfe17d9d539f38b6087fed",
    "fullname": "Rudy Kurniawan",
    "email": "rudy@gmail.com",
    "password": "$2b$08$g4TPTYy6Xv2KF0oDVicsmuX63UX5UqQuR7cwyIIDopdCqfBxPLvAm",
    "__v": 0
}
```
Error (500) Internal Server Error
```
{
    "errors": {
        "email": {
            "message": "Validator failed for path `email` with value `rudy@gmail.com`",
            "name": "ValidatorError",
            "properties": {
                "message": "Validator failed for path `email` with value `rudy@gmail.com`",
                "type": "user defined",
                "path": "email",
                "value": "rudy@gmail.com",
                "reason": "Email has been used"
            },
            "kind": "user defined",
            "path": "email",
            "value": "rudy@gmail.com",
            "reason": "Email has been used"
        }
    },
    "_message": "user validation failed",
    "message": "user validation failed: email: Validator failed for path `email` with value `rudy@gmail.com`",
    "name": "ValidationError"
}
```

### POST users/login
sukses(200)
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYmZlMTdkOWQ1MzlmMzhiNjA4N2ZlZCIsImlhdCI6MTU1NjA3OTAxM30.hetCckjvzQSl9or0VKhvI2BnvNdNJWG7g5vSBqqegmI"
}
```
Error (400)
```
{
    "err": {
        "msg": "Please insert email / password"
    }
}
```

### POST question/
Sukses (201)
```
{
    "upvotes": [],
    "downvotes": [],
    "_id": "5cbfda3bdc11af3093aea05e",
    "userId": "5cbf1b5d9a5d274e8c40db8c",
    "title": "Belajar",
    "description": "Belajar VueX",
    "__v": 0
}
```

Error (404)
```
{
    "msg": "U must be login"
}
```

### PUT question/
Sukses (200)
```
{
    "upvotes": [],
    "downvotes": [],
    "_id": "5cbfda3bdc11af3093aea05e",
    "userId": "5cbf1b5d9a5d274e8c40db8c",
    "title": "Belajar",
    "description": "Belajar VueX",
    "__v": 0
}
```

Error (404)
```
{
    "msg": "U must be login"
}
```

### Delete /quest/:id
Sukses (200)
```
{
    "upvotes": [],
    "downvotes": [],
    "_id": "5cbfda3bdc11af3093aea05e",
    "userId": "5cbf1b5d9a5d274e8c40db8c",
    "title": "Belajar",
    "description": "Belajar menggunakan VueX 2",
    "__v": 0
}
```

Error (404)
```
{
    "msg": "U must be login"
}
```

### GET quest/
Sukses (200)
```
[
    {
        "upvotes": [],
        "downvotes": [],
        "_id": "5cbfda23dc11af3093aea05d",
        "userId": "5cbf1b5d9a5d274e8c40db8c",
        "title": "Judul",
        "description": "Judul Cerita",
        "__v": 0
    }
]
```
Error (404)
```
{
    "msg": "U must be login"
}
```

### GET /quest/:id
Sukses (200)
```
{
      "upvotes": [],
      "downvotes": [],
      "_id": "5cbfda23dc11af3093aea05d",
      "userId": "5cbf1b5d9a5d274e8c40db8c",
      "title": "Judul",
      "description": "Judul Cerita",
      "__v": 0
}
```

Error (404)
```
{
    "msg": "U must be login"
}
```

## Usage

Make sure you have **Node.js** and **npm** installed in your computer, and then run these commands:
```
$ npm install
$ npm start
```