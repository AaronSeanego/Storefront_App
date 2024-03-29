import express, { Response, Request} from "express";
const bcrypt = require("bcrypt");
import client from "../database";
const jwt = require("jsonwebtoken");
import { OrderModels } from "../models/orders";

const orderModels = new OrderModels();

const getOrders = async (_req:Request, res:Response) => {
    try {
        const authorizationHeader = _req.headers.authorization;
        const token = authorizationHeader?.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
        res.status(401);
        res.json(`Invalid token ${err}`);
        return;
    }

    try {
        const orders = await orderModels.getAllOrders();
        res.status(200).json(orders);
    } catch (err) {
        console.log(err);
        res.status(400);
        res.json(err);
    }
}

const getOrderById = async (_req:Request, res:Response) => {
    try {
        const authorizationHeader = _req.headers.authorization;
        const token = authorizationHeader?.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
        res.status(401);
        res.json(`Invalid token ${err}`);
        return;
    }

    try {
        const getOneOrder = await orderModels.getOrderById(_req.body.usersId);
        res.status(200).json(getOneOrder);
    } catch (err) {
        console.log(err);
        res.status(400);
        res.json({ error: err });
    }
}


const createNewOrder = async (_req: Request, res: Response) => {
    try {
        const authorizationHeader = _req.headers.authorization;
        const token = authorizationHeader?.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
        res.status(401);
        res.json(`Invalid token ${err}`);
        return;
    }

    try {
        const newOrder = await orderModels.newOrder(_req.body.userId);
        res.status(200).json(newOrder);
    } catch (err) {
        console.error(err);
        res.status(400);
        res.json({"error": err});
    }
}

const updateOrderInfo = async (_req:Request, res:Response) => {
    try {
        const authorizationHeader = _req.headers.authorization;
        const token = authorizationHeader?.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
        res.status(401);
        res.json(`Invalid token ${err}`);
        return;
    }

    try {
        const updatedData = await orderModels.updateOrderInfo(_req.body.orderId, _req.body.orderStatus);
        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(400);
        res.json({"error": err});
    }
}

const deleteOrder = async (_req:Request, res:Response) => {
    try {
        const authorizationHeader = _req.headers.authorization;
        const token = authorizationHeader?.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
        res.status(401);
        res.json(`Invalid token ${err}`);
        return;
    }
    
    try {
        const deletedOrders = await orderModels.deleteOrder(_req.body.orderId);
        res.status(200).json(deletedOrders);
    } catch (err) {
        console.log(err);
        res.status(400);
        res.json({"error": err});
    }
}

const orderRoutes = (app: express.Application) => {
    app.get('/orders/allOrders', getOrders);
    app.post('/orders/getOrder', getOrderById); ////{"usersId": "1"}
    app.post('/orders/createOrder', createNewOrder); ////{"userId": "1"}
    app.put('/orders/updateOrder', updateOrderInfo); ////{"orderId": "2","orderStatus": "Complete"}
    app.post('/orders/deleteOrder', deleteOrder); ////{"orderId": "1"}
};

export default orderRoutes;