import express, {Express, Request,Response, response} from 'express';
import { UserModels } from "../users";
import { ProductsModels } from "../products";
import { OrderModels } from "../orders";
import { OrderProductsModels } from "../order_products";
import users_func from "../../handers/users";
import productsRoutes from "../../handers/products";
import orderRoutes from "../../handers/orders";
import ordersProductsRoutes from "../../handers/orders_products";
const request = require('request');
// import app from "../../server";

const users = new UserModels();
const products = new ProductsModels();
const orders = new OrderModels();
const orderProducts = new OrderProductsModels();

const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IlN1Y2Nlc3NmdWwiLCJtZXNzYWdlIjoiUmVjb3JkIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIn0sImlhdCI6MTcwNDEzODA4OX0.tQ0AjT4Csq_mTwpPuFDZ9A7-VZU_SernpXE8LADZSC8";

describe("Orders Models", () => {

    it('getOrders function should exist', () => {
        expect(orders.getAllOrders()).toBeDefined();
    })

    it('getAllOrders function should return a json list of all orders', async () => {
        const ordersInfo = await orders.getAllOrders();
        expect(ordersInfo).not.toEqual([]);
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('getOrderById function should exist', () => {
        expect(orders.getOrderById('1')).toBeDefined();
    })

    it('getOrderById function should return a json object a one order information', async () => {
        const ordersInfo = await orders.getOrderById('1');
        expect(ordersInfo).not.toEqual([]);
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('getNewOrder function should exist', () => {
        expect(orders.newOrder(1)).toBeDefined();
    })

    it('getNewOrder function should return a json message that show that a new order was created successfully', async () => {
        const ordersInfo = await orders.newOrder(1);
        expect(ordersInfo).not.toEqual([]);
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('updateOrder function should exist', () => {
        expect(orders.updateOrderInfo('1','Complete')).toBeDefined();
    })

    it('updateOrder function should return a json message that the record was updated', async () => {
        const ordersInfo = await orders.updateOrderInfo('1','Complete');
        expect(ordersInfo).not.toEqual([]);
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('deleteOrder function should exist', () => {
        expect(orders.deleteOrder('2')).toBeDefined();
    })

    it('deleteOrder function should return a json message that the record was deleted successfully', async () => {
        const ordersInfo = await orders.deleteOrder('2');
        expect(ordersInfo).not.toEqual([]);
    });
})

describe('Testing Orders Endpoints', () => {
    describe('Get /orders/allOrders', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/orders/allOrders',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request.get(options, (req:Request, res:Response) => {
                expect(res.statusCode).toEqual(200);
                expect(req.body).toEqual({});
            });
        })
    });

    describe('Post /orders/getOrder', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/orders/getOrder',
                body: {
                    "usersId": "1"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request.post(options, (req:Request, res:Response) => {
                expect(res.statusCode).toEqual(200);
                expect(req.body).toEqual({});
            });
        })
    });

    describe('Post /orders/createOrder', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/orders/createOrder',
                body: {
                    "userId": "1"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request.post(options, (req:Request, res:Response) => {
                expect(res.statusCode).toEqual(200);
                expect(req.body).toEqual({});
            });
        })
    });

    describe('Put /orders/updateOrder', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/orders/updateOrder',
                body: {
                    "orderId": "2",
                    "orderStatus": "Complete"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request.put(options, (req:Request, res:Response) => {
                expect(res.statusCode).toEqual(200);
                expect(req.body).toEqual({});
            });
        })
    });

    describe('Post /orders/deleteOrder', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/orders/deleteOrder',
                body: {
                    "orderId": "1"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request.post(options, (req:Request, res:Response) => {
                expect(res.statusCode).toEqual(200);
                expect(req.body).toEqual({});
            });
        })
    });
})