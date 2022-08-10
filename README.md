# Getting Started with node server App

## Installation

Enter to the server folder

```bash
cd server
```

Install the node_modules

```bash
npm i
```

## Available Scripts

you can run:

### `npm start`

- It will run the app with node
- The page will not reload if you make edits.

### `npm run dev`

- Runs the app with nodemon
- The page will reload if you make edits
- The print at the terminal will be purple with the message:

`server run on: http://:localhost : 8181`

And if there are no login errors you should see the message painted in purple:

`connected to MongoDb!`

### Available Routes

#### Register a new user

```http
  POST /user/register
```

note- to register as admin- youll need to use code "ADMIN99"

request body example:
{
"userName": "user4",
"email": "user4@gmail.com",
"password": "Aa123123!",
"tel": "0528806991",
"city" : "tel-aviv",
"address": "bavli 80",
"apartment": "32b"
}

#### Login a user

```http
  POST /user/login
```

request body example:
{
"email": "ben@gmail.com",
"password": "Aa123123!"
}

#### For Information about a user

```http
  GET /user/find-user
```

You will need to provide a token to get an answer from this api

request header example:
token :eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY1OTAxMzYzOSwiZXhwIjoxNjU5NjE4NDM5fQ.OakUPFiTcXLQDam4ip17HweStkrsSbcGfsAnLGs3OEY

#### To receive all products in DB

```http
  GET /user/allProducts
```

request header example:
token :eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY1OTAxMzYzOSwiZXhwIjoxNjU5NjE4NDM5fQ.OakUPFiTcXLQDam4ip17HweStkrsSbcGfsAnLGs3OEY

#### To get a product info of a specific product

```http
  GET /user/product/:id
```

request example:
localhost:8181/user/product/62e2a47f904883427da39bac

#### To receive cart of the registered user

```http
  GET /user/my-cart
```

You will need to provide a token to get an answer from this api

request header example:
token :eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY1OTAxMzYzOSwiZXhwIjoxNjU5NjE4NDM5fQ.OakUPFiTcXLQDam4ip17HweStkrsSbcGfsAnLGs3OEY

#### To create a new product

```http
  POST /admin/newProduct
```

You will need to provide an admin token to get an answer from this api

request body example:
{
"productName": "bla teset",
"productBarcode": "099",
"productMenufactor": "somone",
"productDescription": "really good bla bla",
"productPrice": "178",
"productCat": "CCCP"
}

#### To update a product info

```http
  PUT /admin/edit-product/:id
```

You will need to provide an admin token to get an answer from this api

#### To delete a product

```http
  DELETE /admin/delete/:id
```

request:localhost:8181/user/edit-profile/62e278ac20880f32c6e06321
request body:
{
"userName": "user4",
"email": "user4@gmail.com",
"password": "Aa123123!",
"tel": "0528000991",
"city" : "tel-aviv",
"address": "bavli 80",
"apartment": "39b",
"dliverExtra": ""
}

You will need to provide an admin token to get an answer from this api
