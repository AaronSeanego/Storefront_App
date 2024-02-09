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
 let token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IlN1Y2Nlc3NmdWwiLCJtZXNzYWdlIjoiUmVjb3JkIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIn0sImlhdCI6MTcwNzM3NzM3OH0.Zkt8wmIwxd15dFK3sQnnR8VhhnSBTdMxVWsiD5wQm4Q";

 const {
    POSTGRES_HOST,
    POSTGRES_DATABASE,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_TEST_DATABASE,
    ENV,
  } = process.env;
  
// describe('Testing Models', () => {
//         ///////////////////////////////////////////////////////////////////////////////////////////
//         /////////////////////////////// The code between the forward slashes and the asterisk is resonsible for manupilating the users table/////////////
//         //////////////////////////////////////////////////////////////////////////////////////////


//         describe('The Code Is For Manupilating The Data In The User Table', () => {
//             it('createUser function should return a json object containing user info and token', async () => {
//                 const usersInfo = await users.createUser('Alpha','alpha@12345','alpha.beta@gmail.com','Alpha','Beta');
//                 expect(users.createUser).toBeDefined();
//                 expect(usersInfo).not.toEqual({});
//             });

//             ///////////////////////////////////////////////////////////////////////////
//             //////////////////////////////////////////////////////////////////////////
//             //////////////////////////////////////////////////////////////////////////

                
//             it('getUsers function should exist', async () => {
//                 const usersInfo = await users.getUsers();
//                 expect(users.getUsers).toBeDefined();
//                 expect(usersInfo).not.toEqual({});
//                 console.log(usersInfo);
//                 // expect(usersInfo.length).toBeTruthy;
//             })

//             ///////////////////////////////////////////////////////////////////////////
//             //////////////////////////////////////////////////////////////////////////
//             //////////////////////////////////////////////////////////////////////////

//             it('userLogin function should return a message object with message that says user logged in', async () => {
//                 const usersInfo = await users.userLogin('Alpha','alpha@12345');
//                 expect(users.userLogin).toBeDefined();
//                 expect(usersInfo).not.toEqual({});
//                 // console.log(usersInfo);
//             });
    
//             ////////////////////////////////////////////////////////////////////////////////
//             ////////////////////////////////////////////////////////////////////////////////
    
//             it('updateUser function should return a json object containing user info and token', async () => {
//                 const usersInfo = await users.updateUserInfo('Alpha','beta@example.com');
//                 expect(users.updateUserInfo).toBeDefined();
//                 expect(usersInfo).not.toEqual({});
//                 console.log(usersInfo);
//             });
    
//             ////////////////////////////////////////////////////////////////////////////////
//             ////////////////////////////////////////////////////////////////////////////////
    
//             it('deleteUser function should return a json object containing delete message', async () => {
//                 const usersInfo = await users.deleteUser('Alpha');
//                 expect(users.deleteUser).toBeDefined();
//                 expect(usersInfo).not.toEqual({});
//                 console.log(usersInfo);
//             });
//         });

//         describe('This Tests Creates Records In The Products Table', () => {

//              it('addNewProducts function must return a message that says product was created', async () => {
//                 const productsInfo = await products.addNewProducts("Apple", 40);
//                 expect(products.addNewProducts).toBeDefined();
//                 expect(productsInfo).not.toEqual({});
//                 console.log(productsInfo);
//                 // expect(productsInfo.length).toBeTruthy;
//             });

//             //////////////////////////////////////////////////////////////////////////////
//             //////////////////////////////////////////////////////////////////////////////
//             //////////////////////////////////////////////////////////////////////////////
    
            
//             it('getAllProducts function should return a list of all products', async () => {
//                 const productsInfo = await products.getAllProducts();
//                 expect(products.getAllProducts).toBeDefined();
//                 expect(productsInfo).not.toEqual({});
//                 console.log(productsInfo);
//                 // expect(productsInfo.length).toBeTruthy;

//             });
        
//             // //////////////////////////////////////////////////////////////////////////////
//             // //////////////////////////////////////////////////////////////////////////////
//             // //////////////////////////////////////////////////////////////////////////////
    
    
//             it('getProductByName function should one product as a json object', async () => {
//                 const productsInfo = await products.getProductByName('Apple');
//                 expect(products.getProductByName).toBeDefined();
//                 expect(productsInfo).not.toEqual({});
//                 console.log(productsInfo);
//                 // expect(productsInfo.length).toBeTruthy;
//             })

//             //////////////////////////////////////////////////////////////////////////////
//             //////////////////////////////////////////////////////////////////////////////
//             //////////////////////////////////////////////////////////////////////////////
    
//             it('updateProductInfo function must return a message that says record was updated', async () => {
//                 const productsInfo = await products.updateProductInfo('1',500);
//                 expect(products.updateProductInfo).toBeDefined();
//                 expect(productsInfo).not.toEqual({});
//                 console.log(productsInfo);
//                 // expect(productsInfo.length).toBeTruthy;
//             });
    
//             // //////////////////////////////////////////////////////////////////////////////
//             // //////////////////////////////////////////////////////////////////////////////
//             // //////////////////////////////////////////////////////////////////////////////
    
//             it('deleteProduct function must return a message that says record was deleted', async () => {
//                 const productsInfo = await products.deleteProduct('5');
//                 expect(products.deleteProduct).toBeDefined();
//                 expect(productsInfo).not.toEqual({});
//                 console.log(productsInfo);
//                 // expect(productsInfo.length).toBeTruthy;
//             });

//         });

// })


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
                    "username":"Alpha",
                    "password":"alpha@12345",
                    "email": "alpha.beta@gmail.com",
                    "firstname": "Alpha",
                    "lastname": "Beta",
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response.status).toBe('200');
                expect(response.method).toBe('POST');
                expect(response.body).toBe('');
                expect(response).not.toEqual({});
                console.log(response.token);
                // token = response;
            }).catch((err:any) => {
                console.error(err);
            })

        });

        it('API response should be a json', async () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/users/register',
                body: {
                    "username":"Beta",
                    "password":"beta@12345",
                    "email": "beta.charlie@gmail.com",
                    "firstname": "Beta",
                    "lastname": "Charlie",
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response.status).toBe('200');
                expect(response.method).toBe('POST');
                expect(response.body).toBe('');
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
                    "username":"Charlie",
                    "password":"charlie@12345",
                    "email": "charlie.delta@gmail.com",
                    "firstname": "Charlie",
                    "lastname": "Delta",
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response.status).toBe('200');
                expect(response.method).toBe('POST');
                expect(response.body).toBe('');
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
                    "username":"Delta",
                    "password":"delta@12345",
                    "email": "delta.echo@gmail.com",
                    "firstname": "Delta",
                    "lastname": "Echo",
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response.status).toBe('200');
                expect(response.method).toBe('POST');
                expect(response.body).toBe('');
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
                    "username":"Echo",
                    "password":"echo@12345",
                    "email": "echo.foxtrot@gmail.com",
                    "firstname": "Echo",
                    "lastname": "Foxtrot",
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response.status).toBe('200');
                expect(response.method).toBe('POST');
                expect(response.body).toBe('');
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
            expect(response.status).toBe('200');
            expect(response.method).toBe('GET');
            expect(response.body).toBe('');
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
                    "username":"Alpha",
                    "password":"alpha@12345"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };
        
            request(options).then((response:any) => {
                expect(response.status).toBe('200');
                expect(response.method).toBe('POST');
                expect(response.body).toBe('');
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
                    "userName": "Alpha",
                    "userEmail": "alpha@alpha.com"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response.status).toBe('200');
                expect(response.method).toBe('PUT');
                expect(response.body).toBe('');
                expect(response).not.toEqual({});
                console.log(response);
            }).catch((err:any) => {
                console.error(err);
            })
        });
      });

    describe('Post /users/deleteUser', () => {
        it('API response should be a json', async () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/users/deleteUser',
                body: {
                    "username":"Echo",
                    "password":"echo.foxtrot@gmail.com"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };

            request(options).then((response:any) => {
                expect(response.status).toBe('200');
                expect(response.method).toBe('POST');
                expect(response.body).toBe('');
                expect(response).not.toEqual({});
                console.log(response);
            }).catch((err:any) => {
                console.error(err);
            })
        });
    });

    describe('Testing Products Endpoints', () => {
        console.log(token);
        describe('Post /products/addNewProducts', () => {
            it('API response should be a json', async () => {
    
                const options = {
                    method: 'POST',
                    uri: 'http://127.0.0.1:3000/products/addNewProducts',
                    body: {
                        "product":"Apple",
                        "price":90
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
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
                        "product":"Banana",
                        "price":50
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
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
                        "product":"Book",
                        "price":20
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
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
                        "product":"Cup",
                        "price":10
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
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
                        "product":"Corn",
                        "price":30
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
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
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('GET');
                    expect(response.body).toBe('');
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
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
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
                        "productId":"1",
                        "productPrice": 12
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('PUT');
                    expect(response.body).toBe('');
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
                        "productId": "5"
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
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
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('GET');
                    expect(response.body).toBe('');
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
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                })
            })

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
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                })
            })

            it('API response should be a json', async () => {
                const options = {
                    method: 'POST',
                    uri: 'http://127.0.0.1:3000/orders/createOrder',
                    body: {
                        "userId": "3"
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                })
            })

            it('API response should be a json', async () => {
                const options = {
                    method: 'POST',
                    uri: 'http://127.0.0.1:3000/orders/createOrder',
                    body: {
                        "userId": "3"
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                })
            })

            it('API response should be a json', async () => {
                const options = {
                    method: 'POST',
                    uri: 'http://127.0.0.1:3000/orders/createOrder',
                    body: {
                        "userId": "4"
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
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
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
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
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('PUT');
                    expect(response.body).toBe('');
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
                        "orderId": "4"
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
    
                request(options).then((response:any) => {
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('POST');
                    expect(response.body).toBe('');
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
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('GET');
                    expect(response.body).toBe('');
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
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('GET');
                    expect(response.body).toBe('');
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
                    expect(response.status).toBe('200');
                    expect(response.method).toBe('GET');
                    expect(response.body).toBe('');
                    expect(response).not.toEqual({});
                }).catch((err:any) => {
                    console.error(err);
                    
                });
            })
        });
    
    })
})
