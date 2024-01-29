"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const database_1 = __importDefault(require("../database"));
const jwt = require("jsonwebtoken");
const orders_1 = require("../models/orders");
const orderModels = new orders_1.OrderModels();
const getOrders = async (_req, res) => {
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
        const orders = await orderModels.getAllOrders();
        console.log(orders);
        res.status(200).json(orders);
        database_1.default.release();
    }
    catch (err) {
        console.log(err);
    }
};
const getOrderById = async (_req, res) => {
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
        const getOneOrder = await orderModels.getOrderById(_req.body.usersId);
        console.log(getOneOrder);
        res.status(200).json(getOneOrder);
    }
    catch (err) {
        console.log(err);
    }
};
const createNewOrder = async (_req, res) => {
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
        const newOrder = await orderModels.newOrder(_req.body.userId);
        console.log(newOrder);
        res.status(200).json(newOrder);
    }
    catch (err) {
        console.error(err);
    }
};
const updateOrderInfo = async (_req, res) => {
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
        const updatedData = await orderModels.updateOrderInfo(_req.body.orderId, _req.body.orderStatus);
        res.status(200).json(updatedData);
        database_1.default.release();
    }
    catch (err) {
    }
};
const deleteOrder = async (_req, res) => {
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
        const deletedOrders = await orderModels.deleteOrder(_req.body.orderId);
        console.log(deleteOrder);
        res.status(200).json(deletedOrders);
    }
    catch (err) {
        console.log(err);
    }
};
const orderRoutes = (app) => {
    app.get('/orders/allOrders', getOrders);
    app.post('/orders/getOrder', getOrderById); ////{"usersId": "1"}
    app.post('/orders/createOrder', createNewOrder); ////{"userId": "1"}
    app.put('/orders/updateOrder', updateOrderInfo); ////{"orderId": "2","orderStatus": "Complete"}
    app.post('/orders/deleteOrder', deleteOrder); ////{"orderId": "1"}
};
exports.default = orderRoutes;
