// import express, {Request, Response} from 'express';
// import { Pool } from 'pg';
// import { UserModels } from "../users";
// import { ProductsModels } from "../products";
// import { OrderModels } from "../orders";
// import { OrderProductsModels } from "../order_products";
// // const request = require('request');
// const request = require('request-promise');
// import app from '../../server';
// // import client from '../../database';
// const users = new UserModels();
// const products = new ProductsModels();
// const orders = new OrderModels();
// const orderProducts = new OrderProductsModels();

// const port:number = 3000;

//  const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IlN1Y2Nlc3NmdWwiLCJtZXNzYWdlIjoiUmVjb3JkIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIn0sImlhdCI6MTcwNDcxMzE1NX0.Q0BhTRhvF1DPN-NT04W1VOrGk7CpQVqhkrJ5P-x_TNA";

// describe('OrderProducts Models', () => {

//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////

//     it('getOrderProducts function should return a json list of ordered products by order id', async () => {
//         const orderProductsInfo = await orderProducts.getOrderedProducts('1');
//         expect(orderProducts.getOrderedProducts).toBeDefined();
//         expect(orderProductsInfo).not.toEqual({});
//     })

//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////

//     it('createOrderProducts function should return a json list of ordered products by order id', async () => {
//         const orderProductsInfo = await orderProducts.createOrderProducts(20,1,3);
//         expect(orderProducts.createOrderProducts).toBeDefined();
//         expect(orderProductsInfo).not.toEqual({});
//     })
    
//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////

//     it('updateOrdersInfo function should return a message that says record updated', async () => {
//         const orderProductsInfo = await orderProducts.updateOrdersInfo(20,1,3);
//         expect(orderProducts.updateOrdersInfo).toBeDefined();
//         expect(orderProductsInfo).not.toEqual({});
//     })
// });


// // describe('Testing OrderedProducts Endpoints', () => {
// //     describe('Post /ordersProducts/:id/products', () => {
// //         it('API response should be a json', () => {
// //             const options = {
// //                 method: 'POST',
// //                 uri: 'http://127.0.0.1:3000/ordersProducts/1/products',
// //                 headers: {
// //                     'Authorization': 'Bearer ' + token
// //                 },
// //                 json: true
// //             };

// //             request(options).then((response:any) => {
// //                 expect(response.status).toBeDefined();
// //                 expect(response.length).toBeGreaterThan(0);
// //             }).catch((err:any) => {
// //                 console.error(err);
                
// //             })
// //         })
// //     });


// //     describe('Post /ordersProducts/createOrdersProducts', () => {
// //         it('API response should be a json', () => {
// //             const options = {
// //                 method: 'POST',
// //                 uri: 'http://127.0.0.1:3000/ordersProducts/createOrdersProducts',
// //                 body: {
// //                     "quantity": 20,
// //                     "ordersId": 1,
// //                     "productId": 2
// //                 },
// //                 headers: {
// //                     'Authorization': 'Bearer ' + token
// //                 },
// //                 json: true
// //             };

// //             request(options).then((response:any) => {
// //                 expect(response.status).toBeDefined();
// //                 expect(response.length).toBeGreaterThan(0);
// //             }).catch((err:any) => {
// //                 console.error(err);
                
// //             })
// //         })
// //     });

// //     describe('Post /ordersProducts/updateOrders', () => {
// //         it('API response should be a json', () => {
// //             const options = {
// //                 method: 'POST',
// //                 uri: 'http://127.0.0.1:3000/ordersProducts/updateOrders',
// //                 body: {
// //                     "quantity": 50,
// //                     "ordersId": 1,
// //                     "product_id":1
// //                 },
// //                 headers: {
// //                     'Authorization': 'Bearer ' + token
// //                 },
// //                 json: true
// //             };

// //             request(options).then((response:any) => {
// //                 expect(response.status).toBeDefined();
// //                 expect(response.length).toBeGreaterThan(0);
// //             }).catch((err:any) => {
// //                 console.error(err);
                
// //             })
// //         })
// //     });

// // })