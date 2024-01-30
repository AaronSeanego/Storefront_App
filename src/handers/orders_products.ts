import express, { Response, Request} from "express";
const bcrypt = require("bcrypt");
import client from "../database";
const jwt = require("jsonwebtoken");
import { OrderProductsModels } from "../models/order_products";

const ordersProducts = new OrderProductsModels();


const getOrderProducts = async (_req:Request, res:Response) => {
    try {
        // const authorizationHeader = _req.headers.authorization;
        const authorizationHeader = _req.headers.authorization;
        const token = authorizationHeader?.split(' ')[1];
        // console.log(token);
        // const token = authorizationHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
        res.status(401);
        res.json(`Invalid token ${err}`);
        return;
    }

    try {
        const orders_products = await ordersProducts.getOrderedProducts(_req.params.id);
        console.log(orders_products);
        res.status(200).json(orders_products);
        // client.release();
    } catch (err) {
        // console.log(err);
    }
}

const createOrdersProducts = async (_req:Request, res:Response) => {
    try {
        // const authorizationHeader = _req.headers.authorization;
        const authorizationHeader = _req.headers.authorization;
        const token = authorizationHeader?.split(' ')[1];
        console.log(token);
        // const token = authorizationHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
        res.status(401);
        res.json(`Invalid token ${err}`);
        return;
    }
    
    try {
        const ordersProdcts = await ordersProducts.createOrderProducts(_req.body.quantity,_req.body.ordersId,_req.body.productId);
        console.log(ordersProdcts);
        res.status(200).json(ordersProdcts);
        // client.release();
    } catch (err) {
        // console.log(err);
    }
}


const updateOrdersInfo = async (_req:Request, res:Response) => {
    try {
        // const authorizationHeader = _req.headers.authorization;
        const authorizationHeader = _req.headers.authorization;
        // const token = authorizationHeader?.slice(7,authorizationHeader.length);
        const token = authorizationHeader?.split(' ')[1];
        console.log(token);
        // const token = authorizationHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
        res.status(401);
        res.json(`Invalid token ${err}`);
        return;
    }

    try {
        const updatedData = await ordersProducts.updateOrdersInfo(_req.body.quantity,_req.body.orderId,_req.body.product_id);
        res.status(200).json(updatedData);
        // client.release();
    } catch (err) {

    }
}

const ordersProductsRoutes = (app: express.Application) => {
    app.post('/ordersProducts/:id/products', getOrderProducts);
    app.post('/ordersProducts/createOrdersProducts', createOrdersProducts); ////{"quantity": 20,"ordersId": 1,"productId": 2 }
    app.put('/ordersProducts/updateOrders', updateOrdersInfo); //// {"quantity": 50,"ordersId": 1,"product_id":1}
}

export default ordersProductsRoutes;