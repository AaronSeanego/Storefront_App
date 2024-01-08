"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const users_1 = require("../users");
const products_1 = require("../products");
const orders_1 = require("../orders");
const order_products_1 = require("../order_products");
const dashboard_1 = require("../../services/dashboard");
// const request = require('request');
const request = require('request-promise');
// import app from "../../server";
const users = new users_1.UserModels();
const products = new products_1.ProductsModels();
const orders = new orders_1.OrderModels();
const orderProducts = new order_products_1.OrderProductsModels();
const dashboard = new dashboard_1.DashBoardModels();
let client;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IlN1Y2Nlc3NmdWwiLCJtZXNzYWdlIjoiUmVjb3JkIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIn0sImlhdCI6MTcwNDcxMzE1NX0.Q0BhTRhvF1DPN-NT04W1VOrGk7CpQVqhkrJ5P-x_TNA";
describe('DashBoard Models', () => {
    const { POSTGRES_HOST, POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_TEST_DATABASE, ENV, } = process.env;
    beforeAll(() => {
        client = new pg_1.Pool({
            host: 'http://127.0.0.1',
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
    it('getJoined function should return a list of joined data', async () => {
        const ordersProductsInfo = await dashboard.getJoined();
        expect(dashboard.getJoined()).toBeDefined();
        expect(ordersProductsInfo.length).toBeGreaterThan(0);
    });
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    it('getProductByLike function should return a jdon object', async () => {
        const ordersProductsInfo = await dashboard.getProductByLike('Apple');
        expect(dashboard.getProductByLike('Apple')).toBeDefined();
        expect(ordersProductsInfo.length).toBeGreaterThan(0);
    });
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    it('getProductByLike function should return a jdon object', async () => {
        const ordersProductsInfo = await dashboard.getProductByPriceRange('30', '80');
        expect(dashboard.getProductByPriceRange('30', '80')).toBeDefined();
        expect(ordersProductsInfo.length).toBeGreaterThan(0);
    });
});
describe('Testing OrderedProducts Endpoints', () => {
    describe('Get /dashboard/joinedData', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'GET',
                uri: 'http://127.0.0.1:3000/dashboard/joinedData',
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
    describe('Get /dashboard/getProductByPrice/:nameString', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'GET',
                uri: 'http://127.0.0.1:3000/dashboard/getProductByPrice/Apple',
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
    describe('Get /dashboard/getProductByPriceRange/minPrice=:min&maxPrice=:max', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'GET',
                uri: 'http://127.0.0.1:3000/dashboard/getProductByPriceRange/minPrice=50&maxPrice=100',
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
