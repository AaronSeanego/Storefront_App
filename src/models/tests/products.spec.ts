import express, {Request,Response} from 'express';
import { Pool } from 'pg';
import { UserModels } from "../users";
import { ProductsModels } from "../products";
import { OrderModels } from "../orders";
import { OrderProductsModels } from "../order_products";
const request = require('request-promise');
// import app from "../../server";

const users = new UserModels();
const products = new ProductsModels();
const orders = new OrderModels();
const orderProducts = new OrderProductsModels();

let client: Pool;
const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IlN1Y2Nlc3NmdWwiLCJtZXNzYWdlIjoiUmVjb3JkIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIn0sImlhdCI6MTcwNDcxMzE1NX0.Q0BhTRhvF1DPN-NT04W1VOrGk7CpQVqhkrJ5P-x_TNA";

describe('Products Model', () => {
    const {
        POSTGRES_HOST,
        POSTGRES_DATABASE,
        POSTGRES_USER,
        POSTGRES_PASSWORD,
        POSTGRES_TEST_DATABASE,
        ENV,
      } = process.env;
    
      beforeAll(() => {
          client = new Pool({
              host: '127.0.0.1',
              database: 'storefront_app_test_db',
              user: 'Lapi',
              password: '#03Malapile#03'
          });
          client.connect();
      });
      
      afterAll(() => {
          client.end();
      });

    it('getAllProducts function should return a list of all products', async () => {
        const usersInfo = await products.getAllProducts();
        expect(products.getAllProducts()).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    })

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('getProductByName function should one product as a json object', async () => {
        const usersInfo = await products.getProductByName('Apple');
        expect(products.getProductByName('Apple')).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    })

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('addNewProducts function must return a message that says product was created', async () => {
        const usersInfo = await products.addNewProducts('Bread',30);
        expect(products.addNewProducts('Bread',30)).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    })
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('updateProductInfo function must return a message that says record was updated', async () => {
        const usersInfo = await products.updateProductInfo('2',200);
        expect(products.updateProductInfo('2',200)).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    })

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('deleteProduct function must return a message that says record was deleted', async () => {
        const usersInfo = await products.deleteProduct('3');
        expect(products.deleteProduct('3')).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    })
    
});


describe('Testing Products Endpoints', () => {

    describe('Post /users/register', () => {
        it('API response should be a json', () => {

            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/products/addNewProducts',
                body: {
                    "product":"Coconut",
                    "price":90
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request(options).then((response:any) => {
                expect(response.status).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            }).catch((err:any) => {
                console.error(err);
                
            })

        });
      });

    describe('Get /products/allProducts', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'GET',
                uri: 'http://127.0.0.1:3000/products/allProducts',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request(options).then((response:any) => {
                expect(response.status).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            }).catch((err:any) => {
                console.error(err);
                
            });
        })
    });

    describe('Post /products/productByName', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/products/productByName',
                body: {
                    "product":"Apple"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request(options).then((response:any) => {
                expect(response.status).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            }).catch((err:any) => {
                console.error(err);
                
            });
        })
    });

    describe('Put /products/updateProductPrice', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'PUT',
                uri: 'http://127.0.0.1:3000/products/updateProductPrice',
                body: {
                    "productId":"2",
                    "productPrice": 12
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request(options).then((response:any) => {
                expect(response.status).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            }).catch((err:any) => {
                console.error(err);
                
            });
        })
    });

    describe('Post /products/deleteProduct', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/products/deleteProduct',
                body: {
                    "username":"Beta",
                    "password":"beta@12345"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request(options).then((response:any) => {
                expect(response.status).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            }).catch((err:any) => {
                console.error(err);
                
            });
        })
    });
})