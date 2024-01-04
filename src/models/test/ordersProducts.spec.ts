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

describe('OrderProducts Models', () => {
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('getOrderProducts function should exist', () => {
        expect(orderProducts.getOrderedProducts('1')).toBeDefined();
    })

    it('getOrderProducts function should return a json list of ordered products by order id', async () => {
        const ordersProductsInfo = await orderProducts.getOrderedProducts('1');
        expect(ordersProductsInfo).not.toEqual([]);
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('createOrderProducts function should exist', () => {
        expect(orderProducts.createOrderProducts(20,1,3)).toBeDefined();
    })

    it('createOrderProducts function should return a json list of ordered products by order id', async () => {
        const ordersProductsInfo = await orderProducts.createOrderProducts(20,1,3);
        expect(ordersProductsInfo).not.toEqual([]);
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('updateOrdersInfo function should exist', () => {
        expect(orderProducts.updateOrdersInfo(20,1,3)).toBeDefined();
    })

    it('updateOrdersInfo function should return a message that says record updated', async () => {
        const ordersProductsInfo = await orderProducts.updateOrdersInfo(20,1,3);
        expect(ordersProductsInfo).not.toEqual([]);
    });
});


describe('Testing OrderedProducts Endpoints', () => {
    describe('Post /ordersProducts/:id/products', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/ordersProducts/1/products',
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

    describe('Post /ordersProducts/createOrdersProducts', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/ordersProducts/createOrdersProducts',
                body: {
                    "quantity": 20,
                    "ordersId": 1,
                    "productId": 2
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

    describe('Post /ordersProducts/updateOrders', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/ordersProducts/updateOrders',
                body: {
                    "quantity": 50,
                    "ordersId": 1,
                    "product_id":1
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