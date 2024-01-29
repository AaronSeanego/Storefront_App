"use strict";
// import express, {Request, Response} from 'express';
// import { Pool } from 'pg';
// import { UserModels } from "../users";
// import { ProductsModels } from "../products";
// import { OrderModels } from "../orders";
// import { OrderProductsModels } from "../order_products";
// // const request = require('request');
// const request = require('request-promise');
// import app from "../../server";
// // import client from '../../database';
// const users = new UserModels();
// const products = new ProductsModels();
// const orders = new OrderModels();
// const orderProducts = new OrderProductsModels();
// const port:number = 3000;
// const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IlN1Y2Nlc3NmdWwiLCJtZXNzYWdlIjoiUmVjb3JkIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIn0sImlhdCI6MTcwNDcxMzE1NX0.Q0BhTRhvF1DPN-NT04W1VOrGk7CpQVqhkrJ5P-x_TNA";
// describe('Products Model', () => {
//     describe('Products Model', () => {
//         it('getAllProducts function should return a list of all products', async () => {
//             const productsInfo = await products.getAllProducts();
//             expect(products.getAllProducts).toBeDefined();
//             expect(productsInfo).not.toEqual({});
//             // expect(productsInfo.length).toBeTruthy;
//         })
//         ////////////////////////////////////////////////////////////////////////////////
//         ////////////////////////////////////////////////////////////////////////////////
//         ////////////////////////////////////////////////////////////////////////////////
//         it('getProductByName function should one product as a json object', async () => {
//             const productsInfo = await products.getProductByName('Apple');
//             expect(products.getProductByName).toBeDefined();
//             expect(productsInfo).not.toEqual({});
//             // expect(productsInfo.length).toBeTruthy;
//         })
//         ////////////////////////////////////////////////////////////////////////////////
//         ////////////////////////////////////////////////////////////////////////////////
//         ////////////////////////////////////////////////////////////////////////////////
//         it('addNewProducts function must return a message that says product was created', async () => {
//             const productsInfo = await products.addNewProducts('Cdfasd',50);
//             expect(products.addNewProducts).toBeDefined();
//             expect(productsInfo).not.toEqual({});
//             // expect(productsInfo.length).toBeTruthy;
//         })
//         ////////////////////////////////////////////////////////////////////////////////
//         ////////////////////////////////////////////////////////////////////////////////
//         ////////////////////////////////////////////////////////////////////////////////
//         it('updateProductInfo function must return a message that says record was updated', async () => {
//             const productsInfo = await products.updateProductInfo('2',200);
//             expect(products.updateProductInfo).toBeDefined();
//             expect(productsInfo).not.toEqual({});
//             // expect(productsInfo.length).toBeTruthy;
//         })
//         ////////////////////////////////////////////////////////////////////////////////
//         ////////////////////////////////////////////////////////////////////////////////
//         ////////////////////////////////////////////////////////////////////////////////
//         it('deleteProduct function must return a message that says record was deleted', async () => {
//             const productsInfo = await products.deleteProduct('3');
//             expect(products.deleteProduct).toBeDefined();
//             expect(productsInfo).not.toEqual({});
//             // expect(productsInfo.length).toBeTruthy;
//         })
//     });
// });
// describe('Testing Products Endpoints', () => {
//     describe('Post /products/addNewProducts', () => {
//         it('API response should be a json', () => {
//             const options = {
//                 method: 'POST',
//                 uri: 'http://127.0.0.1:3000/products/addNewProducts',
//                 body: {
//                     "product":"Coconut",
//                     "price":90
//                 },
//                 headers: {
//                     'Authorization': 'Bearer ' + token
//                 },
//                 json: true
//             };
//             request(options).then((response:any) => {
//                 expect(response.status).toBeDefined();
//                 expect(response.length).toBeGreaterThan(0);
//             }).catch((err:any) => {
//                 console.error(err);
//             })
//         });
//       });
//     describe('Get /products/allProducts', () => {
//         it('API response should be a json', () => {
//             const options = {
//                 method: 'GET',
//                 uri: 'http://127.0.0.1:3000/products/allProducts',
//                 headers: {
//                     'Authorization': 'Bearer ' + token
//                 },
//                 json: true
//             };
//             request(options).then((response:any) => {
//                 expect(response.status).toBeDefined();
//                 expect(response.length).toBeGreaterThan(0);
//             }).catch((err:any) => {
//                 console.error(err);
//             });
//         })
//     });
//     describe('Post /products/productByName', () => {
//         it('API response should be a json', () => {
//             const options = {
//                 method: 'POST',
//                 uri: 'http://127.0.0.1:3000/products/productByName',
//                 body: {
//                     "product":"Apple"
//                 },
//                 headers: {
//                     'Authorization': 'Bearer ' + token
//                 },
//                 json: true
//             };
//             request(options).then((response:any) => {
//                 expect(response.status).toBeDefined();
//                 expect(response.length).toBeGreaterThan(0);
//             }).catch((err:any) => {
//                 console.error(err);
//             });
//         })
//     });
//     describe('Put /products/updateProductPrice', () => {
//         it('API response should be a json', () => {
//             const options = {
//                 method: 'PUT',
//                 uri: 'http://127.0.0.1:3000/products/updateProductPrice',
//                 body: {
//                     "productId":"2",
//                     "productPrice": 12
//                 },
//                 headers: {
//                     'Authorization': 'Bearer ' + token
//                 },
//                 json: true
//             };
//             request(options).then((response:any) => {
//                 expect(response.status).toBeDefined();
//                 expect(response.length).toBeGreaterThan(0);
//             }).catch((err:any) => {
//                 console.error(err);
//             });
//         })
//     });
//     describe('Post /products/deleteProduct', () => {
//         it('API response should be a json', () => {
//             const options = {
//                 method: 'POST',
//                 uri: 'http://127.0.0.1:3000/products/deleteProduct',
//                 body: {
//                     "username":"Beta",
//                     "password":"beta@12345"
//                 },
//                 headers: {
//                     'Authorization': 'Bearer ' + token
//                 },
//                 json: true
//             };
//             request(options).then((response:any) => {
//                 expect(response.status).toBeDefined();
//                 expect(response.length).toBeGreaterThan(0);
//             }).catch((err:any) => {
//                 console.error(err);
//             });
//         })
//     });
// })
