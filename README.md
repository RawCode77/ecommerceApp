
# A Full Stack Web Development using the MERN stack and DEVOPS

The ecommerce store "dev-Shop" is built  with a frontend  of ReactJs and connnected to the the backend of NodeJs and a production grade database. To have a more full stack experience I  will also implement docker containers deployed to docker hub. Travis CI is used to create a secure pipeline for the continuous integration and delivery of the application to Google Cloud.

# Application Content

- MongoDB
- NodeJs / ExpressJs
- Build APIs
- Test APIs using postman
- ReactJs

 DEVOPS
- Container and docker
- Continuous Integration and Continuous Delivery
- Google Cloud

Dev-Shop is a application that will allow seller and buyers to can interact. Sellers can signup and then are able to create products and post these products on this web application. Those who want to purchase can simoply join and click on a particular product. The sellers have the capability to create products. In this application you will be able to tell who the merchant (seller) is and who the buyer (customer) is using a dashboard that is designed for that purpose.

# Dashboard

The ability to search is the same for the seller and customer. 

Seller:
Search Product  ->  Add Products ->   Remove Products  ->  Update Products

Customer:
Search Product -> Product Details(seller, price, quantity)  ->  Shopping Cart -> Payment(Stripe)

# Tech Stack 

**Client:** React, Redux

**Server:** Node, Express


# Standards to RESTFUL APIs

| Method   | URL                  | Actions                               |
| :------- | :------------------- | :-----------------------------------  |
| `GET`    | `/api/users`         | `Get all users`                       |
| `POST`   | `/api/users`         | `Create a new user`                   |
| `GET`    | `/api/users`         | `Get a specific user`                 |
| `PATCH`  | `/api/users`         | `Update a specific user record`       |
| `GET`    | `/api/users`         | `Get the product of a particular user`|
| `POST`   | `/api/users`         | `Create a specific product`           |




#
# HTTP Request Methods

| Method     | Description                                                            |
| :-------   | :------------------------------------------------------                |
| `GET`      | `used to retrieve information from the given server using a given URI.`| 
|            | ` Requests using GET should only retrieve data and should have no`     |
|            |  `other effect on the data `                                           |
| `POST`     | `used to send data to the server `                                     |
| `PUT/PATCH`| `Replace / updates existing record`                                    |
| `DELETE`   | `Update a specific user record`                                        |
| `CONNECT`  | `Get the product of a particular user`                                 |





#
# HTTP STATUS CODES

| Code       | Meaning                                                              |
| :-------   | :------------------------------------------------------              |
| `2xx`      | `codes signify that the action requested by the client was received,`| 
|            | ` understood, and accepted.`                                         |
| `3xx`      |`This class of status code indicates the client must take`            |
|            |` additional action to complete the request `                         |
| `4xx`      |`error seems to have been caused by the connecting client. Usually`   |  
|            |`Usually a bad request has been made`                                 |
| `5xx`      | `This means that the server failed to fulfil the request`            |



#
# Creating Models

**User:** 

Name, email, password, seller/buyer/admins

**Product:**

user, name, description, category, Price, brands, quantity



## Screenshots

![Creating Models](https://github.com/RawCode77/ecommerceApp/assets/124092089/5fa5f896-1047-4cf2-a7b0-3c3bd30e6445)


## Coupling the Backend to Frontend

`Coming Soon...`


## DevOps Integration

`Coming Soon...`



