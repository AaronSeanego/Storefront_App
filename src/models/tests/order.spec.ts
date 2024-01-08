import express, {Request,Response} from 'express';
import { Pool } from 'pg';
import { UserModels } from "../users";
import { ProductsModels } from "../products";
import { OrderModels } from "../orders";
import { OrderProductsModels } from "../order_products";
// const request = require('request');
const request = require('request-promise');
// import app from "../../server";

const users = new UserModels();
const products = new ProductsModels();
const orders = new OrderModels();
const orderProducts = new OrderProductsModels();

let client: Pool;
 const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IlN1Y2Nlc3NmdWwiLCJtZXNzYWdlIjoiUmVjb3JkIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIn0sImlhdCI6MTcwNDcxMzE1NX0.Q0BhTRhvF1DPN-NT04W1VOrGk7CpQVqhkrJ5P-x_TNA";

describe("Orders Models", () => {

    const {
        POSTGRES_HOST,
        POSTGRES_DATABASE,
        POSTGRES_USER,
        POSTGRES_PASSWORD,
        POSTGRES_TEST_DATABASE,
        ENV,
      } = process.env;
    
        let client: Pool;
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

    it('getAllOrders function should return a json list of all orders', async () => {
        const usersInfo = await orders.getAllOrders();
        expect(orders.getAllOrders()).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    })

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('getOrderById function should return a json object a one order information', async () => {
        const usersInfo = await orders.getOrderById('1');
        expect(orders.getOrderById('1')).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    })
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('getNewOrder function should return a json message that show that a new order was created successfully', async () => {
        const usersInfo = await orders.newOrder(1);
        expect(orders.newOrder(1)).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    })

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('updateOrder function should return a json message that the record was updated', async () => {
        const usersInfo = await orders.updateOrderInfo('1','Complete');
        expect(orders.updateOrderInfo('1','Complete')).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    })

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('deleteOrder function should return a json message that the record was deleted successfully', async () => {
        const usersInfo = await orders.deleteOrder('2');
        expect(orders.deleteOrder('2')).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    })
})

describe('Testing Orders Endpoints', () => {
    describe('Get /orders/allOrders', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'GET',
                uri: 'http://127.0.0.1:3000/orders/allOrders',
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
        })
    });

    describe('Post /orders/getOrder', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/orders/getOrder',
                body: {
                    "usersId": "1"
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
        })
    });

    describe('Post /orders/createOrder', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/orders/createOrder',
                body: {
                    "userId": "1"
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
        })
    });

    describe('Put /orders/updateOrder', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'PUT',
                uri: 'http://127.0.0.1:3000/orders/updateOrder',
                body: {
                    "orderId": "2",
                    "orderStatus": "Complete"
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

    describe('Post /orders/deleteOrder', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/orders/deleteOrder',
                body: {
                    "orderId": "1"
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