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
// "start": "node src/server.ts",
/*"test": "SET ENV=test && npx tsc && db-migrate up && db-migrate --env test up && jasmine-ts && db-migrate db:drop storefront_app_test_db",*/
 let token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IlN1Y2Nlc3NmdWwiLCJtZXNzYWdlIjoiUmVjb3JkIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIn0sImlhdCI6MTcwOTEwNzYwM30.zB8SubUFibdNDBw79E8S9WouUxPBuqyRL_hRbiyxU-Q";

 const {
    POSTGRES_HOST,
    POSTGRES_DATABASE,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_TEST_DATABASE,
    ENV,
  } = process.env;
  
describe('Testing Models', () => {
        ///////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////// The code between the forward slashes and the asterisk is resonsible for manupilating the users table/////////////
        //////////////////////////////////////////////////////////////////////////////////////////


        describe('The Code Is For Manupilating The Data In The User Table', () => {
            it("The model should have a createUser method", () => {
                expect(users.createUser).toBeDefined();
            })
            it('createUser function should return a json object containing user info and token', async () => {
                let usersInfo = await users.createUser('Alpha','alpha@12345','alpha.beta@gmail.com','Alpha','Beta');
                usersInfo = await users.createUser('Alpha','alpha@12345','alpha.beta@gmail.com','Alpha','Beta');
                usersInfo = await users.createUser('Beta','beta@12345','beta.charlie@gmail.com','Beta','Charlie');
                usersInfo = await users.createUser('Charlie','charlie@12345','Charlie.Delta@gmail.com','Charlie','Delta');
                usersInfo = await users.createUser('Delta','delta@12345','Delta.Echo@gmail.com','Delta','Echo');
                usersInfo = await users.createUser('Echo','echo@12345','Echo.Foxtrot@gmail.com','Echo','Foxtrot');
                console.log(usersInfo);
                expect(usersInfo).not.toEqual({});
            });

            ///////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////

                
            it('getUsers function should exist', async () => {
                const usersInfo = await users.getUsers();
                expect(users.getUsers).toBeDefined();
            })

            it('getUsers function should return a list of all users', async () => {
              const usersInfo = await users.getUsers();
              expect(usersInfo).not.toEqual({});
            })

            // ///////////////////////////////////////////////////////////////////////////
            // //////////////////////////////////////////////////////////////////////////
            // //////////////////////////////////////////////////////////////////////////

            it('userLogin function should exist', async () => {
              expect(users.userLogin).toBeDefined();
            })
          
            it('userLogin function should return a message object with message that says user logged in', async () => {
                const usersInfo = await users.userLogin('Alpha','alpha@12345');
                expect(usersInfo).not.toEqual({});
                console.log("This is on line 80 ", usersInfo);
            });
    
            // ////////////////////////////////////////////////////////////////////////////////
            // ////////////////////////////////////////////////////////////////////////////////
            
            it('updateUserInfo function should exist', async () => {
              expect(users.updateUserInfo).toBeDefined();
            })

            it('updateUser function should return a json object containing user info and token', async () => {
                const usersInfo = await users.updateUserInfo('Beta','beta@example.com');
                expect(usersInfo).not.toEqual({});
            });
    
            // ////////////////////////////////////////////////////////////////////////////////
            // ////////////////////////////////////////////////////////////////////////////////
            
            it('deleteUser function should exist', async () => {
              expect(users.deleteUser).toBeDefined();
            })

            // it('deleteUser function should return a json object containing delete message', async () => {
            //     const usersInfo = await users.deleteUser('Echo');
            //     expect(users.deleteUser).toBeDefined();
            //     expect(usersInfo).not.toEqual({});
            //     console.log(usersInfo);
            // });

            // ///////////////////////////////////////////////////////////////////////////
            // //////////////////////////////////////////////////////////////////////////
            // //////////////////////////////////////////////////////////////////////////

        });

        describe('This Tests Creates Records In The Products Table', () => {

            it('addNewProducts function should exist', async () => {
              expect(products.addNewProducts).toBeDefined();
            });

             it('addNewProducts function must return a message that says product was created', async () => {
                let productsInfo = await products.addNewProducts("Apple", 40);
                productsInfo = await products.addNewProducts("Banana", 10);
                productsInfo = await products.addNewProducts("Coconut", 20);
                productsInfo = await products.addNewProducts("Book", 5);
                productsInfo = await products.addNewProducts("Backpack", 80);
                expect(productsInfo).not.toEqual({});
            });

            //////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////
            
            it('getAllProducts function should exist', async () => {
              expect(products.getAllProducts).toBeDefined();
            });
            
            it('getAllProducts function should return a list of all products', async () => {
                const productsInfo = await products.getAllProducts();
                expect(productsInfo).not.toEqual({});
            });
        
            // //////////////////////////////////////////////////////////////////////////////
            // //////////////////////////////////////////////////////////////////////////////
            // //////////////////////////////////////////////////////////////////////////////
            
            it('getProductByName function should exist', async () => {
              expect(products.getProductByName).toBeDefined();
            });
    
            it('getProductByName function should one product as a json object', async () => {
                const productsInfo = await products.getProductByName('Apple');
                expect(productsInfo).not.toEqual({});
            })

            //////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////
            
            it('updateProductInfo function should exist', async () => {
              expect(products.updateProductInfo).toBeDefined();
            });

            it('updateProductInfo function must return a message that says record was updated', async () => {
                const productsInfo = await products.updateProductInfo('1',500);
                expect(productsInfo).not.toEqual({});
            });
    
            // //////////////////////////////////////////////////////////////////////////////
            // //////////////////////////////////////////////////////////////////////////////
            // //////////////////////////////////////////////////////////////////////////////
    
            // it('deleteProduct function must return a message that says record was deleted', async () => {
            //     const productsInfo = await products.deleteProduct('5');
            //     expect(products.deleteProduct).toBeDefined();
            //     expect(productsInfo).not.toEqual({});
            //     console.log(productsInfo);
            //     // expect(productsInfo.length).toBeTruthy;
            // });

        });

        describe('This Tests Manages In The Orders Table', () => {

          it('getAllOrders function should exist', async () => {
            expect(orders.getAllOrders).toBeDefined();
          });

           it('getAllOrders function must return a message that says product was created', async () => {
              let ordersInfo = await orders.getAllOrders();
              expect(ordersInfo).not.toEqual({});
          });

          //////////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////////
          
          it('getAllOrders function should exist', async () => {
            expect(orders.getAllOrders).toBeDefined();
          });
          
          it('getAllOrders function should return a list of all products', async () => {
              let ordersInfo = await orders.getAllOrders();
              expect(ordersInfo).not.toEqual({});
          });
          
          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////
          
          it('newOrder function should exist', async () => {
            expect(orders.newOrder).toBeDefined();
          });
  
          it('newOrder function should one product as a json object', async () => {
              let ordersInfo = await orders.newOrder(1);
              expect(ordersInfo).not.toEqual({});
          })

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////
          
          it('getOrderById function should exist', async () => {
            expect(orders.getOrderById).toBeDefined();
          });
  
          it('getOrderById function should one product as a json object', async () => {
              let ordersInfo = await orders.getOrderById('1');
              expect(ordersInfo).not.toEqual({});
          })

          //////////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////////
          
          it('updateOrderInfo function should exist', async () => {
            expect(orders.updateOrderInfo).toBeDefined();
          });

          it('updateOrderInfo function must return a message that says record was updated', async () => {
              const productsInfo = await orders.updateOrderInfo('1','Complete');
              expect(productsInfo).not.toEqual({});
          });
  
          // //////////////////////////////////////////////////////////////////////////////
          // //////////////////////////////////////////////////////////////////////////////
          // //////////////////////////////////////////////////////////////////////////////
  
          // it('deleteProduct function must return a message that says record was deleted', async () => {
          //     const productsInfo = await products.deleteProduct('5');
          //     expect(products.deleteProduct).toBeDefined();
          //     expect(productsInfo).not.toEqual({});
          //     console.log(productsInfo);
          //     // expect(productsInfo.length).toBeTruthy;
          // });

      });

      describe('This Tests Manages In The OrdersProducts Table', () => {

        it('getOrderedProducts function should exist', async () => {
          expect(orderProducts.getOrderedProducts).toBeDefined();
        });

         it('getOrderedProducts function must return a message that says product was created', async () => {
            let ordersProductsInfo = await orderProducts.getOrderedProducts('1');
            expect(ordersProductsInfo).not.toEqual({});
        });

        //////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////
        
        it('createOrderProducts function should exist', async () => {
          expect(orderProducts.createOrderProducts).toBeDefined();
        });
        
        it('createOrderProducts function should return a list of all products', async () => {
            let ordersProductsInfo = await orderProducts.createOrderProducts(4,1,2);
            ordersProductsInfo = await orderProducts.createOrderProducts(2,1,2);
            ordersProductsInfo = await orderProducts.createOrderProducts(10,1,3);
            ordersProductsInfo = await orderProducts.createOrderProducts(5,1,4);
            expect(ordersProductsInfo).not.toEqual({});
        });
        
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        
        it('updateOrdersInfo function should exist', async () => {
          expect(orderProducts.updateOrdersInfo).toBeDefined();
        });

        it('updateOrdersInfo function should one product as a json object', async () => {
            let ordersProductsInfo = await orderProducts.updateOrdersInfo(100,1,2);
            expect(ordersProductsInfo).not.toEqual({});
        })

    });

    describe('This Tests Is For Additional Queries', () => {

      it('getJoined function should exist', async () => {
        expect(dashboard.getJoined).toBeDefined();
      });

       it('getJoined function must return a message that says product was created', async () => {
          let dashboardInfo = await dashboard.getJoined();
          expect(dashboardInfo).not.toEqual({});
      });

      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      
      it('getProductByLike function should exist', async () => {
        expect(dashboard.getProductByLike).toBeDefined();
      });
      
      it('getProductByLike function should return a list of all products', async () => {
          let dashboardInfo = await dashboard.getProductByLike('Banana');
          expect(dashboardInfo).not.toEqual({});
      });
      
      ////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////
      
      it('getProductByPriceRange function should exist', async () => {
        expect(dashboard.getProductByPriceRange).toBeDefined();
      });

      it('getProductByPriceRange function should one product as a json object', async () => {
          let dashboardInfo = await dashboard.getProductByPriceRange('20','40');
          expect(dashboardInfo).not.toEqual({});
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
                    "username":"Foxtrot",
                    "password":"foxtrot@12345",
                    "email": "foxtrot.golf@gmail.com",
                    "firstname": "Foxtrot",
                    "lastname": "Golf"
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response.status).toBe('200');
                expect(response).not.toEqual({});
                console.log(response.token);
                token = response.token;
            }).catch((err:any) => {
                console.error(err);
            })

        });

        it('API response should be a json', async () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/users/register',
                body: {
                    "username":"Golf",
                    "password":"golf@12345",
                    "email": "golf.hotel@gmail.com",
                    "firstname": "Golf",
                    "lastname": "Hotel",
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response.status).toBe('200');
                expect(response).not.toEqual({});
            }).catch((err:any) => {
                console.error(err);
            })

        });

        it('API response should be a json', async () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/users/register',
                body: {
                    "username":"Hotel",
                    "password":"hotel@12345",
                    "email": "hotel.india@gmail.com",
                    "firstname": "Hotel",
                    "lastname": "India",
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response.status).toBe('200');
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
            // expect(response.status).toBe('200');
            expect(response).not.toEqual({});
            console.log(response);
        }).catch((err:any) => {
            console.error(err);
        })

        });
        
      });

      describe('Post /users/login', () => {
        it('API response should be a json', async () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/users/login',
                body: {
                    "username":"Foxtrot",
                    "password":"foxtrot@12345"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };
        
            request(options).then((response:any) => {
                // expect(response.status).toBe('200');
                expect(response).not.toEqual({});
                console.log(response);
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
                    "userName": "Golf",
                    "userEmail": "golf@example.com"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response).not.toEqual({});
                console.log(response);
            }).catch((err:any) => {
                console.error(err);
            })
        });
      });

    // describe('Post /users/deleteUser', () => {
    //     it('API response should be a json', async () => {
    //         const options = {
    //             method: 'POST',
    //             uri: 'http://127.0.0.1:3000/users/deleteUser',
    //             body: {
    //                 "username":"Echo",
    //                 "password":"echo.foxtrot@gmail.com"
    //             },
    //             headers: {
    //                 'Authorization': 'Bearer ' + token
    //             },
    //             json: true
    //         };

    //         request(options).then((response:any) => {
    //             expect(response.status).toBe('200');
    //             expect(response).not.toEqual({});
    //             console.log(response);
    //         }).catch((err:any) => {
    //             console.error(err);
    //         })
    //     });
    // });

    describe('Testing Products Endpoints', () => {
        console.log(token);
        describe('Post /products/addNewProducts', () => {
            it('API response should be a json', async () => {
    
                const options = {
                    method: 'POST',
                    uri: 'http://127.0.0.1:3000/products/addNewProducts',
                    body: {
                        "product":"Bread",
                        "price":90
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response).not.toEqual({});
                    console.log(response);
                }).catch((err:any) => {
                    console.error(err);
                    
                })
    
            });

            it('API response should be a json', async () => {
    
                const options = {
                    method: 'POST',
                    uri: 'http://127.0.0.1:3000/products/addNewProducts',
                    body: {
                        "product":"Juice",
                        "price":50
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response).not.toEqual({});
                    console.log(response);
                }).catch((err:any) => {
                    console.error(err);
                    
                })
    
            });

            it('API response should be a json', async () => {
    
                const options = {
                    method: 'POST',
                    uri: 'http://127.0.0.1:3000/products/addNewProducts',
                    body: {
                        "product":"Pen",
                        "price":20
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response).not.toEqual({});
                    console.log(response);
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
                    // expect(response.status).toBe('200');
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
                    // expect(response.status).toBe('200');
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
                        "productId":"4",
                        "productPrice": 12
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    // expect(response.status).toBe('200');
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                });
            })
        });
    
        // describe('Post /products/deleteProduct', () => {
        //     it('API response should be a json', async () => {
        //         const options = {
        //             method: 'POST',
        //             uri: 'http://127.0.0.1:3000/products/deleteProduct',
        //             body: {
        //                 "productId": "5"
        //             },
        //             headers: {
        //                 'Authorization': 'Bearer ' + token
        //             },
        //             json: true
        //         };
    
        //         request(options).then((response:any) => {
        //             expect(response.status).toBe('200');
        //             expect(response.method).toBe('POST');
        //             expect(response.body).toBe('');
        //             expect(response).not.toEqual({});
        //         }).catch((err:any) => {
        //             console.error(err);
                    
        //         });
        //     })
        // });
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
                        "userId": "2"
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
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
                        "orderId": "1",
                        "orderStatus": "Complete"
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                });
            })
        });
    
        // describe('Post /orders/deleteOrder', () => {
        //     it('API response should be a json', async () => {
        //         const options = {
        //             method: 'POST',
        //             uri: 'http://127.0.0.1:3000/orders/deleteOrder',
        //             body: {
        //                 "orderId": "4"
        //             },
        //             headers: {
        //                 'Authorization': 'Bearer ' + token
        //             },
        //             json: true
        //         };
    
        //         request(options).then((response:any) => {
        //             expect(response.status).toBe('200');
        //             expect(response.method).toBe('POST');
        //             expect(response.body).toBe('');
        //             expect(response).not.toEqual({});
        //         }).catch((err:any) => {
        //             console.error(err);
                    
        //         });
        //     })
        // });
    })


    describe('Testing Dashboard Endpoints', () => {
    
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
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                });
            })
        });
    
    })
})
