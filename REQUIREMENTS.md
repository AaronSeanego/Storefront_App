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
- 127.0.0.1:3000/users/allUsers - (header: token)
- 127.0.0.1:3000/users/login - (body: {"username":"Beta","password":"beta@12345"}) - (header: token)
- 127.0.0.1:3000/users/register - (body: {"username":"Echo","password":"echo@12345","email":"email@gmail.com"}) - (header: token)
- 127.0.0.1:3000/users/updateEmail - (body: {"userName": "Alpha", "userEmail": "alpha@alpha.com"}) - (header: token)
- 127.0.0.1:3000/users/updateEmail - (body: {"username":"Echo"}) - (header: token)
- 
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
- 127.0.0.1:3000/products/allProducts - (header: token)
- 127.0.0.1:3000//products/productByName - (body: {"product":"Apple"}) - (header: token)
- 127.0.0.1:3000/products/addNewProducts - (body: {"product":"Coconut","price":90}) - (header: token)
- 127.0.0.1:3000/products/updateProductPrice - (body: {"productId","2","productPrice": 12}) - (header: token)
-127.0.0.1:3000/products/deleteProduct - (body: {"productId": "3"}) - (header: token)
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)



##### API EndPoints List
#### Users ####

- 127.0.0.1:3000/users/allUsers - (header: token)
- 127.0.0.1:3000/users/login - (body: {"username":"Beta","password":"beta@12345"}) - (header: token)
- 127.0.0.1:3000/users/register - (body: {"username":"Echo","password":"echo@12345","email":"email@gmail.com","firstname":"Echo","lastname":"Foxtrot"})
- 127.0.0.1:3000/users/updateEmail - (body: {"userName": "Alpha", "userEmail": "alpha@alpha.com"}) - (header: token)
- 127.0.0.1:3000/users/updateEmail - (body: {"username":"Echo"}) - (header: token)

#### Products ####

- 127.0.0.1:3000/products/allProducts - (header: token)
- 127.0.0.1:3000//products/productByName - (body: {"product":"Apple"}) - (header: token)
- 127.0.0.1:3000/products/addNewProducts - (body: {"product":"Coconut","price":90}) - (header: token)
- 127.0.0.1:3000/products/updateProductPrice - (body: {"productId","2","productPrice": 12}) - (header: token)
- 127.0.0.1:3000/products/deleteProduct - (body: {"productId": "3"}) - (header: token)



#### Orders ####

- 127.0.0.1:3000/orders/allOrders - (header: token)
- 127.0.0.1:3000/orders/getOrder - (body: {"usersId": "1"}) - (header: token)
- 127.0.0.1:3000/orders/createOrder - (body: {"userId": "1"}) - (header: token)
- 127.0.0.1:3000/orders/updateOrder - (body: {"orderId": "2","orderStatus": "Complete"}) - (header: token)
- 127.0.0.1:3000/orders/deleteOrder - (body: {"orderId": "1"}) - (header: token)

#### Cart ####

- 127.0.0.1:3000/ordersProducts/:id/products - (header: token)
- 127.0.0.1:3000/ordersProducts/createOrdersProducts - (body: {"quantity": 20,"ordersId": 1,"productId": 2 }) - (header: token)
- 127.0.0.1:3000/ordersProducts/updateOrders - (body: {"quantity": 50,"ordersId": 1,"product_id":1}) - (header: token)

#### Dashboard ####

- 127.0.0.1:3000/dashboard/joinedData - (header: token)
- 127.0.0.1:3000/dashboard/getProductByPrice/:nameString - (header: token)
- 127.0.0.1:3000/dashboard/getProductByPriceRange/minPrice=:min&maxPrice=:max - (header: token)

