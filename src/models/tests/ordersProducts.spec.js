"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const users_1 = require("../users");
const products_1 = require("../products");
const orders_1 = require("../orders");
const order_products_1 = require("../order_products");
const request = require('request-promise');
// import app from "../../server";
const users = new users_1.UserModels();
const products = new products_1.ProductsModels();
const orders = new orders_1.OrderModels();
const orderProducts = new order_products_1.OrderProductsModels();
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IlN1Y2Nlc3NmdWwiLCJtZXNzYWdlIjoiUmVjb3JkIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIn0sImlhdCI6MTcwNDEzODA4OX0.tQ0AjT4Csq_mTwpPuFDZ9A7-VZU_SernpXE8LADZSC8";
describe('OrderProducts Models', () => {
    const { POSTGRES_HOST, POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_TEST_DATABASE, ENV, } = process.env;
    let client;
    beforeAll(() => {
        client = new pg_1.Pool({
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
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    it('getOrderProducts function should return a json list of ordered products by order id', async () => {
        const usersInfo = await orderProducts.getOrderedProducts('1');
        expect(orderProducts.getOrderedProducts('1')).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    });
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    it('createOrderProducts function should return a json list of ordered products by order id', async () => {
        client.connect();
        const usersInfo = await orderProducts.createOrderProducts(20, 1, 3);
        expect(orderProducts.createOrderProducts(20, 1, 3)).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    });
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    it('updateOrdersInfo function should return a message that says record updated', async () => {
        client.connect();
        const usersInfo = await orderProducts.updateOrdersInfo(20, 1, 3);
        expect(orderProducts.updateOrdersInfo(20, 1, 3)).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    });
});
describe('Testing OrderedProducts Endpoints', () => {
    describe('Post /ordersProducts/:id/products', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/ordersProducts/1/products',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };
            request(options).then((response) => {
                expect(response.status).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            }).catch((err) => {
                console.error(err);
            });
        });
    });
    describe('Post /ordersProducts/createOrdersProducts', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/ordersProducts/createOrdersProducts',
                body: {
                    "quantity": 20,
                    "ordersId": 1,
                    "productId": 2
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };
            request(options).then((response) => {
                expect(response.status).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            }).catch((err) => {
                console.error(err);
            });
        });
    });
    describe('Post /ordersProducts/updateOrders', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/ordersProducts/updateOrders',
                body: {
                    "quantity": 50,
                    "ordersId": 1,
                    "product_id": 1
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };
            request(options).then((response) => {
                expect(response.status).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            }).catch((err) => {
                console.error(err);
            });
        });
    });
});
