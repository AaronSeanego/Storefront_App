"use strict";
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
// describe("Orders Models", () => {
//     it('getAllOrders function should return a json list of all orders', async () => {
//         const ordersInfo = await orders.getAllOrders();
//         expect(orders.getAllOrders).toBeDefined();
//         expect(ordersInfo.length).not.toEqual({});
//     })
//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////
//     it('getOrderById function should return a json object a one order information', async () => {
//         const ordersInfo = await orders.getOrderById('1');
//         expect(orders.getOrderById).toBeDefined();
//         expect(ordersInfo.length).not.toEqual({});
//     })
//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////
//     it('getNewOrder function should return a json message that show that a new order was created successfully', async () => {
//         const ordersInfo = await orders.newOrder(1);
//         expect(orders.newOrder).toBeDefined();
//         expect(ordersInfo.length).not.toEqual({});
//     })
//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////
//     it('updateOrder function should return a json message that the record was updated', async () => {
//         const ordersInfo = await orders.updateOrderInfo('1','Complete');
//         expect(orders.updateOrderInfo).toBeDefined();
//         expect(ordersInfo.length).not.toEqual({});
//     })
//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////
//     ////////////////////////////////////////////////////////////////////////////////
//     it('deleteOrder function should return a json message that the record was deleted successfully', async () => {
//         const ordersInfo = await orders.deleteOrder('2');
//         expect(orders.deleteOrder).toBeDefined();
//         expect(ordersInfo.length).not.toEqual({});
//     })
// })
// describe('Testing Orders Endpoints', () => {
//     describe('Get /orders/allOrders', () => {
//         it('API response should be a json', () => {
//             const options = {
//                 method: 'GET',
//                 uri: 'http://127.0.0.1:3000/orders/allOrders',
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
//         })
//     });
//     describe('Post /orders/getOrder', () => {
//         it('API response should be a json', () => {
//             const options = {
//                 method: 'POST',
//                 uri: 'http://127.0.0.1:3000/orders/getOrder',
//                 body: {
//                     "usersId": "1"
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
//         })
//     });
//     describe('Post /orders/createOrder', () => {
//         it('API response should be a json', () => {
//             const options = {
//                 method: 'POST',
//                 uri: 'http://127.0.0.1:3000/orders/createOrder',
//                 body: {
//                     "userId": "1"
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
//         })
//     });
//     describe('Put /orders/updateOrder', () => {
//         it('API response should be a json', () => {
//             const options = {
//                 method: 'PUT',
//                 uri: 'http://127.0.0.1:3000/orders/updateOrder',
//                 body: {
//                     "orderId": "2",
//                     "orderStatus": "Complete"
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
//     describe('Post /orders/deleteOrder', () => {
//         it('API response should be a json', () => {
//             const options = {
//                 method: 'POST',
//                 uri: 'http://127.0.0.1:3000/orders/deleteOrder',
//                 body: {
//                     "orderId": "1"
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
