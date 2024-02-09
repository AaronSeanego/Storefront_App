# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- /users/allUsers - (header: token)
- /users/login - (body: {"username":"Beta","password":"beta@12345"}) - (header: token)
- /users/register - (body: {"username":"Echo","password":"echo@12345","email":"email@gmail.com"}) - (header: token)
- /users/updateEmail - (body: {"userName": "Alpha", "userEmail": "alpha@alpha.com"}) - (header: token)
- /users/updateEmail - (body: {"username":"Echo"}) - (header: token)
- 
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
- /products/allProducts - (header: token)
- /products/productByName - (body: {"product":"Apple"}) - (header: token)
- /products/addNewProducts - (body: {"product":"Coconut","price":90}) - (header: token)
- /products/updateProductPrice - (body: {"productId","2","productPrice": 12}) - (header: token)
- /products/deleteProduct - (body: {"productId": "3"}) - (header: token)

-  id: integer
- name: string
- price : integer

#### User
- id : integer
- firstName: string
- lastName: string
- password: string
- email: string

#### Orders
- id: integer
- user_id : integer
- status of order (active or complete):string

#### Orders_Products
- id: integer
- quantity of each product in the order: integer
- product_id: integer
- order_id: integer

#########################################################################################
#########################################################################################
#########################################################################################
#########################################################################################
#########################################################################################

##### API EndPoints List
#### Users ####
## Users Scheme ##

- id : integer
- firstName: string
- lastName: string
- password: string
- email: string

## Endpoints ##
- /users/allUsers 
    - (header: token)
- /users/login 
    - (body: {"username":"Beta","password":"beta@12345"}) 
    - (header: token)
- /users/register 
    - (body: {"username":"Echo","password":"echo@12345","email":"email@gmail.com","firstname":"Echo","lastname":"Foxtrot"})
- /users/updateEmail 
    - (body: {"userName": "Alpha", "userEmail": "alpha@alpha.com"}) 
    - (header: token)
- /users/updateEmail 
    - (body: {"username":"Echo"}) 
    - (header: token)

#### Products ####
## Products Scheme ##

-  id: integer
- name: string
- price : integer

## Endpoints ##
- /products/allProducts 
    - (header: token)
- /products/productByName 
    - (body: {"product":"Apple"}) 
    - (header: token)
- /products/addNewProducts 
    - (body: {"product":"Coconut","price":90}) 
    - (header: token)
- /products/updateProductPrice 
    - (body: {"productId","2","productPrice": 12}) 
    - (header: token)
- /products/deleteProduct 
    - (body: {"productId": "3"}) 
    - (header: token)


#### Orders ####
## Orders Scheme ##

- id: integer
- user_id : integer
- status of order (active or complete):string

## Endpoints ##
- /orders/allOrders 
    - (header: token)
- /orders/getOrder
    - (body: {"usersId": "1"})
    - (header: token)
- /orders/createOrder 
    - (body: {"userId": "1"})
    - (header: token)
- /orders/updateOrder 
    - (body: {"orderId": "2","orderStatus": "Complete"})
    - (header: token)
- /orders/deleteOrder 
    - (body: {"orderId": "1"}) 
    - (header: token)

#### OrderProducts(Cart) ####
## OrderProducts(Cart) Scheme ##

- id: integer
- quantity of each product in the order: integer
- product_id: integer
- order_id: integer

## Endpoints ##
- /ordersProducts/:id/products 
    - (header: token)
- /ordersProducts/createOrdersProducts 
    - (body: {"quantity": 20,"ordersId": 1,"productId": 2 }) 
    - (header: token)
- /ordersProducts/updateOrders 
    - (body: {"quantity": 50,"ordersId": 1,"product_id":1}) 
    - (header: token)

#### Dashboard ####
## Endpoints ##

- /dashboard/joinedData 
    - (header: token)
- /dashboard/getProductByPrice/:nameString 
    - (header: token)
- /dashboard/getProductByPriceRange/minPrice=:min&maxPrice=:max 
    - (header: token)

