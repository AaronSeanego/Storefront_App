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

describe('Products Model', () => {

    it('getAllProducts function should exist', () => {
        expect(products.getAllProducts()).toBeDefined();
    })

    it('getAllProducts function should return a list of all products', async () => {
        const productsInfo = await products.getAllProducts();
        expect(productsInfo).not.toEqual({});
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('getProductByName function should exist', () => {
        expect(products.getProductByName('Apple')).toBeDefined();
    })

    it('getProductByName function should one product as a json object', async () => {
        const productsInfo = await products.getProductByName('Apple');
        expect(productsInfo).not.toEqual({});
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('addNewProducts function should exist', () => {
        expect(products.addNewProducts('Bread',30)).toBeDefined();
    })

    it('addNewProducts function must return a message that says product was created', async () => {
        const productsInfo = await products.addNewProducts('Bread',30);
        expect(productsInfo).not.toEqual({});
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('updateProductInfo function should exist', () => {
        expect(products.updateProductInfo('2',200)).toBeDefined();
    })

    it('updateProductInfo function must return a message that says record was updated', async () => {
        const productsInfo = await products.updateProductInfo('2',200);
        expect(productsInfo).not.toEqual({});
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('deleteProduct function should exist', () => {
        expect(products.deleteProduct('3')).toBeDefined();
    })

    it('deleteProduct function must return a message that says record was deleted', async () => {
        const productsInfo = await products.deleteProduct('3');
        expect(productsInfo).not.toEqual({});
    });
    
});


describe('Testing Products Endpoints', () => {
    describe('Get /products/allProducts', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/products/allProducts',
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

    describe('Post /products/productByName', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/products/productByName',
                body: {
                    "product":"Apple"
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

    describe('Post /products/addNewProducts', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/products/addNewProducts',
                body: {
                    "product":"Coconut",
                    "price":90
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

    describe('Put /products/updateProductPrice', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/products/updateProductPrice',
                body: {
                    "productId":"2",
                    "productPrice": 12
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

    describe('Post /products/deleteProduct', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/products/deleteProduct',
                body: {
                    "username":"Beta",
                    "password":"beta@12345"
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