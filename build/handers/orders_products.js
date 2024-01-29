"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const database_1 = __importDefault(require("../database"));
const jwt = require("jsonwebtoken");
const order_products_1 = require("../models/order_products");
const ordersProducts = new order_products_1.OrderProductsModels();
const getOrderProducts = async (_req, res) => {
    try {
        // const authorizationHeader = _req.headers.authorization;
        const authorizationHeader = _req.headers.authorization;
        const token = authorizationHeader?.split(' ')[1];
        // console.log(token);
        // const token = authorizationHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
    }
    catch (err) {
        res.status(401);
        res.json(`Invalid token ${err}`);
        return;
    }
    try {
        const orders_products = await ordersProducts.getOrderedProducts(_req.params.id);
        console.log(orders_products);
        res.status(200).json(orders_products);
        database_1.default.release();
    }
    catch (err) {
        // console.log(err);
    }
};
const createOrdersProducts = async (_req, res) => {
    try {
        // const authorizationHeader = _req.headers.authorization;
        const authorizationHeader = _req.headers.authorization;
        const token = authorizationHeader?.split(' ')[1];
        console.log(token);
        // const token = authorizationHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
    }
    catch (err) {
        res.status(401);
        res.json(`Invalid token ${err}`);
        return;
    }
    try {
        const ordersProdcts = await ordersProducts.createOrderProducts(_req.body.quantity, _req.body.ordersId, _req.body.productId);
        console.log(ordersProdcts);
        res.status(200).json(ordersProdcts);
        database_1.default.release();
    }
    catch (err) {
        // console.log(err);
    }
};
const updateOrdersInfo = async (_req, res) => {
    try {
        // const authorizationHeader = _req.headers.authorization;
        const authorizationHeader = _req.headers.authorization;
        // const token = authorizationHeader?.slice(7,authorizationHeader.length);
        const token = authorizationHeader?.split(' ')[1];
        console.log(token);
        // const token = authorizationHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
    }
    catch (err) {
        res.status(401);
        res.json(`Invalid token ${err}`);
        return;
    }
    try {
        const updatedData = await ordersProducts.updateOrdersInfo(_req.body.quantity, _req.body.orderId, _req.body.product_id);
        res.status(200).json(updatedData);
        database_1.default.release();
    }
    catch (err) {
    }
};
const ordersProductsRoutes = (app) => {
    app.post('/ordersProducts/:id/products', getOrderProducts);
    app.post('/ordersProducts/createOrdersProducts', createOrdersProducts); ////{"quantity": 20,"ordersId": 1,"productId": 2 }
    app.put('/ordersProducts/updateOrders', updateOrdersInfo); //// {"quantity": 50,"ordersId": 1,"product_id":1}
};
exports.default = ordersProductsRoutes;
