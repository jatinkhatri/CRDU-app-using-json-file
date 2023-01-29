
# Node JS Assignment 4
Profile management: Node.js and Express

Create a back-end application using Node.js and Express framework to get post and modify user data from a json file.

The endpoints and their functionalities that you need to create are as follows:

- /add -> POST Method -> This route should add the data sent with the request body into the post.json file.

If the data is added successfully, then you should sent a response code of 200.

- /view -> GET Method -> This route has a optional query param called id. If no query param get passed with the request then you should fetch all the data from the get.json file. If some id gets passed with the request query param, then you should send the details of the user having id equal to the id that comes with the request query.

- /edit/:id -> PATCH Method
This route should update the values of the of the user having id in post.json equal to the id that comes with the request URL. You can update name, age and email of a user.

This request should update the name of the user having id 3 in post.json as updated name.
If the data is updated successfully, then you should send a status code of 200.

### Steps to be followed:
- Install all the dependencies by clicking Run -> Install from the menu bar.
- You can run your application by clicking Run -> Run from the menu bar.
- You can test your app by clicking Run -> Test from the menu bar or by clicking the Run tests button at the right bottom.


## Installation

Install app-runner with npm run below commands

```bash
  cd path-project/app-runner
  npm install
  npm start
```
## How to Use

- Open url http://localhost:3030/
- Click on install Dependencies
- Click on run app - wait until app status should active
- Access APIs Using Postman
- Click on stop app to terminate the app.

![alt text](https://i.ibb.co/kB7rjtC/image.png)


## API Reference

#### Get all items

```http
  GET /view
```

#### Get item

```http
  GET /view?id=1
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` |  id of record 


#### Add New item

```http
  POST /add
```
Body
```JSON
{
    "id":2,
    "name":"John doe",
    "age":22,
    "gender":"male",
    "email":"johndoe@example.com"
}
````

#### update the item

```http
  POST /edit:id
```
Body

```JSON
{
 "name":"Jatin Khatri"
}
```
