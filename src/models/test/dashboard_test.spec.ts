import express, {Express, Request,Response, response} from 'express';
import { UserModels } from "../users";
import { ProductsModels } from "../products";
import { OrderModels } from "../orders";
import { OrderProductsModels } from "../order_products";
import users_func from "../../handers/users";
import productsRoutes from "../../handers/products";
import orderRoutes from "../../handers/orders";
import ordersProductsRoutes from "../../handers/orders_products";
import { DashBoardModels } from '../../services/dashboard';
const request = require('request');
// import app from "../../server";

const users = new UserModels();
const products = new ProductsModels();
const orders = new OrderModels();
const orderProducts = new OrderProductsModels();
const dashboard = new DashBoardModels();

const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IlN1Y2Nlc3NmdWwiLCJtZXNzYWdlIjoiUmVjb3JkIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIn0sImlhdCI6MTcwNDEzODA4OX0.tQ0AjT4Csq_mTwpPuFDZ9A7-VZU_SernpXE8LADZSC8";

describe('DashBoard Models', () => {
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('getJoined function should exist', () => {
        expect(dashboard.getJoined()).toBeDefined();
    })

    it('getJoined function should return a list of joined data', async () => {
        const ordersProductsInfo = await dashboard.getJoined();
        expect(ordersProductsInfo).not.toEqual([]);
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('getProductByLike function should exist', () => {
        expect(dashboard.getProductByLike('Apple')).toBeDefined();
    })

    it('getProductByLike function should return a jdon object', async () => {
        const ordersProductsInfo = await dashboard.getProductByLike('Apple');
        expect(ordersProductsInfo).not.toEqual([]);
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('getProductByPriceRange function should exist', () => {
        expect(dashboard.getProductByPriceRange('30','80')).toBeDefined();
    })

    it('getProductByPriceRange function should return an object', async () => {
        const ordersProductsInfo = await dashboard.getProductByPriceRange('30','80');
        expect(ordersProductsInfo).not.toEqual([]);
    });
});

describe('Testing OrderedProducts Endpoints', () => {
    describe('Get /dashboard/joinedData', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/dashboard/joinedData',
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

    describe('Get /dashboard/getProductByPrice/:nameString', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/dashboard/getProductByPrice/Apple',
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

    describe('Get /dashboard/getProductByPriceRange/minPrice=:min&maxPrice=:max', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/dashboard/getProductByPriceRange/minPrice=50&maxPrice=100',
                body: {
                    "quantity": 50,
                    "ordersId": 1,
                    "product_id":1
                },
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

})