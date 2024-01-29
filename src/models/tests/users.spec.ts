import express, {Request, Response} from 'express';
import { Pool } from 'pg';
import { UserModels } from "../users";
import { ProductsModels } from "../products";
import { OrderModels } from "../orders";
import { OrderProductsModels } from "../order_products";
import { DashBoardModels } from '../../services/dashboard';
const dashboard = new DashBoardModels();
// const request = require('request');
const request = require('request-promise');
import app from '../../server';
// import client from '../../database';
const users = new UserModels();
const products = new ProductsModels();
const orders = new OrderModels();
const orderProducts = new OrderProductsModels();

const port:number = 8080;
let portString: string = '8080';

/*"test": "SET ENV=test && npx tsc && db-migrate up && db-migrate --env test up && jasmine-ts && db-migrate db:drop storefront_app_test_db",*/
 const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IlN1Y2Nlc3NmdWwiLCJtZXNzYWdlIjoiUmVjb3JkIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIn0sImlhdCI6MTcwNDcxMzE1NX0.Q0BhTRhvF1DPN-NT04W1VOrGk7CpQVqhkrJ5P-x_TNA";

 const {
    POSTGRES_HOST,
    POSTGRES_DATABASE,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_TEST_DATABASE,
    ENV,
  } = process.env;
  
describe('Testing Models', () => {

    describe('User Models', () => {
        it('getUsers function should exist', async () => {
            const usersInfo = await users.getUsers();
            expect(users.getUsers).toBeDefined();
            expect(usersInfo).not.toEqual({});
            console.log(usersInfo);
            // expect(usersInfo.length).toBeTruthy;
        })
        
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('createUser function should return a json object containing user info and token', async () => {
            const usersInfo = await users.createUser('Alpha','alpha@1234','alpha@gmail.com','Alpha','Alpha');
            expect(users.createUser).toBeDefined();
            expect(usersInfo).toEqual({
                "status": "Successful",
                "message": "Record successfully created"
            });

            console.log(usersInfo);
        });

        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('userLogin function should return a message object with message that says user logged in', async () => {
            const usersInfo = await users.userLogin('Alpha','alpha@1234');
            expect(users.userLogin).toBeDefined();
            expect(usersInfo).not.toEqual({});
            console.log(usersInfo);
        });
    
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('updateUser function should return a json object containing user info and token', async () => {
            const usersInfo = await users.updateUserInfo('Beta','beta.foxtrot@gmail.com');
            expect(users.updateUserInfo).toBeDefined();
            expect(usersInfo).not.toEqual({});
            console.log(usersInfo);
        });
    
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('deleteUser function should return a json object containing delete message', async () => {
            const usersInfo = await users.deleteUser('adfsaf');
            expect(users.deleteUser).toBeDefined();
            expect(usersInfo).not.toEqual({});
            console.log(usersInfo);
        });
    });


    describe('Products Model', () => {

        it('getAllProducts function should return a list of all products', async () => {
            const productsInfo = await products.getAllProducts();
            expect(products.getAllProducts).toBeDefined();
            expect(productsInfo).not.toEqual({});
            console.log(productsInfo);
            // expect(productsInfo.length).toBeTruthy;

        })
        
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('addNewProducts function must return a message that says product was created', async () => {
            const productsInfo = await products.addNewProducts('Apple',40);
            expect(products.addNewProducts).toBeDefined();
            expect(productsInfo).not.toEqual({});
            console.log(productsInfo);
            // expect(productsInfo.length).toBeTruthy;
        })

        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('getProductByName function should one product as a json object', async () => {
            const productsInfo = await products.getProductByName('Apple');
            expect(products.getProductByName).toBeDefined();
            expect(productsInfo).not.toEqual({});
            console.log(productsInfo);
            // expect(productsInfo.length).toBeTruthy;
        })

        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('updateProductInfo function must return a message that says record was updated', async () => {
            const productsInfo = await products.updateProductInfo('3',500);
            expect(products.updateProductInfo).toBeDefined();
            expect(productsInfo).not.toEqual({});
            console.log(productsInfo);
            // expect(productsInfo.length).toBeTruthy;
        })
    
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('deleteProduct function must return a message that says record was deleted', async () => {
            const productsInfo = await products.deleteProduct('100');
            expect(products.deleteProduct).toBeDefined();
            expect(productsInfo).not.toEqual({});
            console.log(productsInfo);
            // expect(productsInfo.length).toBeTruthy;
        })
        
    });




    describe("Orders Models", () => {

        it('getAllOrders function should return a json list of all orders', async () => {
            const ordersInfo = await orders.getAllOrders();
            expect(orders.getAllOrders).toBeDefined();
            expect(ordersInfo).not.toEqual({});
            console.log(ordersInfo);
        })

        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('getNewOrder function should return a json message that show that a new order was created successfully', async () => {
            const ordersInfo = await orders.newOrder(24);
            expect(orders.newOrder).toBeDefined();
            expect(ordersInfo).not.toEqual({});
            console.log(ordersInfo);
        })
    
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('getOrderById function should return a json object a one order information', async () => {
            const ordersInfo = await orders.getOrderById('1');
            expect(orders.getOrderById).toBeDefined();
            expect(ordersInfo).not.toEqual({});
            console.log(ordersInfo);
        })
    
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('updateOrder function should return a json message that the record was updated', async () => {
            const ordersInfo = await orders.updateOrderInfo('3','Complete');
            expect(orders.updateOrderInfo).toBeDefined();
            expect(ordersInfo).not.toEqual({});
            console.log(ordersInfo);
        })
    
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('deleteOrder function should return a json message that the record was deleted successfully', async () => {
            const ordersInfo = await orders.deleteOrder('3');
            expect(orders.deleteOrder).toBeDefined();
            expect(ordersInfo).not.toEqual({});
            console.log(ordersInfo);
        })
    })



    describe('OrderProducts Models', () => {

                ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('getOrderProducts function should return a json list of ordered products by order id', async () => {
            const orderProductsInfo = await orderProducts.getOrderedProducts('1');
            expect(orderProducts.getOrderedProducts).toBeDefined();
            expect(orderProductsInfo).not.toEqual({});
            console.log(orderProductsInfo);
        })

        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('createOrderProducts function should return a json list of ordered products by order id', async () => {
            const orderProductsInfo = await orderProducts.createOrderProducts(70,4,9);
            expect(orderProducts.createOrderProducts).toBeDefined();
            expect(orderProductsInfo).not.toEqual({});
            console.log(orderProductsInfo);
        })
        
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('updateOrdersInfo function should return a message that says record updated', async () => {
            const orderProductsInfo = await orderProducts.updateOrdersInfo(20,4,8);
            expect(orderProducts.updateOrdersInfo).toBeDefined();
            expect(orderProductsInfo).not.toEqual({});
        })
    });




    describe('DashBoard Models', () => {

        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('getJoined function should return a list of joined data', async () => {
            const joinedInfo = await dashboard.getJoined();
            expect(dashboard.getJoined).toBeDefined();
            expect(joinedInfo).not.toEqual({});
            console.log(joinedInfo);
        })
    
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('getProductByLike function should return a jdon object', async () => {
            const joinedInfo = await dashboard.getProductByLike('Apple');
            expect(dashboard.getProductByLike).toBeDefined();
            expect(joinedInfo).not.toEqual({});
            console.log(joinedInfo);
        })
    
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    
        it('getProductByLike function should return a jdon object', async () => {
            const joinedInfo = await dashboard.getProductByPriceRange('30','80');
            expect(dashboard.getProductByPriceRange).toBeDefined();
            expect(joinedInfo).not.toEqual({});
            console.log(joinedInfo);
        })
    });

})

///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////







describe('Testing Users Endpoints', () => {

    beforeAll(() => {
        app;
    });

    afterAll(() => {
    });

        describe('Post /users/register', () => {
        it('API response should be a json', async () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/users/register',
                body: {
                    "username":"Delta",
                    "password":"delta@12345",
                    "email": "delta.echo@gmail.com",
                    "firstname": "Delta",
                    "lastname": "Echo",
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response.status).toBeDefined();
                expect(response).not.toEqual({});
            }).catch((err:any) => {
                console.error(err);
                
            })

        });
      });

        describe('Get /users/allUsers', () => {
        it('should retrieve all users', async () => {
            const options = {
                method: 'GET',
                uri: 'http://127.0.0.1:3000/users/allUsers',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };
        request(options).then((response:any) => {
            expect(response.status).toBeDefined();
            expect(response).not.toEqual({});
            console.log(response);
        }).catch((err:any) => {
        })

        });
        
      });

      describe('Post /users/login', () => {
        it('API response should be a json', async () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/users/login',
                body: {
                    "username":"Alpha",
                    "password":"alpha@12345"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };
        
            request(options).then((response:any) => {
                expect(response.status).toBeDefined();
                expect(response).not.toEqual({});
            }).catch((err:any) => {
            })
        });
      });


      describe('Put /users/updateEmail', () => {
        it('API response should be a json', async () => {
            const options = {
                method: 'PUT',
                uri: 'http://127.0.0.1:3000/users/updateEmail',
                body: {
                    "userName": "Alpha",
                    "userEmail": "alpha@alpha.com"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response.status).toBeDefined();
                expect(response).not.toEqual({});
            }).catch((err:any) => {
            })
        });
      });

    describe('Post /users/deleteUser', () => {
        it('API response should be a json', async () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/users/deleteUser',
                body: {
                    "username":"Beta",
                    "password":"beta@12345"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response.status).toBeDefined();
                expect(response).not.toEqual({});
            }).catch((err:any) => {
            })
        });
    });

    describe('Testing Products Endpoints', () => {

        describe('Post /products/addNewProducts', () => {
            it('API response should be a json', async () => {
    
                const options = {
                    method: 'POST',
                    uri: 'http://127.0.0.1:3000/products/addNewProducts',
                    body: {
                        "product":"Coconut",
                        "price":90
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBeDefined();
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                })
    
            });
          });
    
        describe('Get /products/allProducts', () => {
            it('API response should be a json', async () => {
                const options = {
                    method: 'GET',
                    uri: 'http://127.0.0.1:3000/products/allProducts',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBeDefined();
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                });
            })
        });
    
        describe('Post /products/productByName', () => {
            it('API response should be a json', async () => {
                const options = {
                    method: 'POST',
                    uri: 'http://127.0.0.1:3000/products/productByName',
                    body: {
                        "product":"Apple"
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBeDefined();
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                });
            })
        });
    
        describe('Put /products/updateProductPrice', () => {
            it('API response should be a json', async () => {
                const options = {
                    method: 'PUT',
                    uri: 'http://127.0.0.1:3000/products/updateProductPrice',
                    body: {
                        "productId":"2",
                        "productPrice": 12
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBeDefined();
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                });
            })
        });
    
        describe('Post /products/deleteProduct', () => {
            it('API response should be a json', async () => {
                const options = {
                    method: 'POST',
                    uri: 'http://127.0.0.1:3000/products/deleteProduct',
                    body: {
                        "username":"Beta",
                        "password":"beta@12345"
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBeDefined();
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                });
            })
        });
    })



    describe('Testing Orders Endpoints', () => {
        describe('Get /orders/allOrders', () => {
            it('API response should be a json', async () => {
                const options = {
                    method: 'GET',
                    uri: 'http://127.0.0.1:3000/orders/allOrders',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBeDefined();
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                })
            })
        });
    
        describe('Post /orders/getOrder', () => {
            it('API response should be a json', async () => {
                const options = {
                    method: 'POST',
                    uri: 'http://127.0.0.1:3000/orders/getOrder',
                    body: {
                        "usersId": "1"
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBeDefined();
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                })
            })
        });
    
        describe('Post /orders/createOrder', () => {
            it('API response should be a json', async () => {
                const options = {
                    method: 'POST',
                    uri: 'http://127.0.0.1:3000/orders/createOrder',
                    body: {
                        "userId": "1"
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBeDefined();
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                })
            })
        });
    
        describe('Put /orders/updateOrder', () => {
            it('API response should be a json', async () => {
                const options = {
                    method: 'PUT',
                    uri: 'http://127.0.0.1:3000/orders/updateOrder',
                    body: {
                        "orderId": "2",
                        "orderStatus": "Complete"
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBeDefined();
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                });
            })
        });
    
        describe('Post /orders/deleteOrder', () => {
            it('API response should be a json', async () => {
                const options = {
                    method: 'POST',
                    uri: 'http://127.0.0.1:3000/orders/deleteOrder',
                    body: {
                        "orderId": "1"
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBeDefined();
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                });
            })
        });
    })


    describe('Testing OrderedProducts Endpoints', () => {
    
        describe('Get /dashboard/joinedData', () => {
            it('API response should be a json', async () => {
                const options = {
                    method: 'GET',
                    uri: 'http://127.0.0.1:3000/dashboard/joinedData',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBeDefined();
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                });
            })
        });
    
    
        describe('Get /dashboard/getProductByPrice/:nameString', () => {
            it('API response should be a json', async () => {
                const options = {
                    method: 'GET',
                    uri: 'http://127.0.0.1:3000/dashboard/getProductByPrice/Apple',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBeDefined();
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                });
            })
        });
    
        describe('Get /dashboard/getProductByPriceRange/minPrice=:min&maxPrice=:max', () => {
            it('API response should be a json', async () => {
                const options = {
                    method: 'GET',
                    uri: 'http://127.0.0.1:3000/dashboard/getProductByPriceRange/minPrice=50&maxPrice=100',
                    body: {
                        "quantity": 50,
                        "ordersId": 1,
                        "product_id":1
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBeDefined();
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                });
            })
        });
    
    })
})
