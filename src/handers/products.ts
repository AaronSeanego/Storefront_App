import express, { Response, Request, application} from "express";
const bcrypt = require("bcrypt");
import client from "../database";
const jwt = require("jsonwebtoken");
import { ProductsModels } from "../models/products";

const productsModels = new ProductsModels();

const getProducts = async (_req:Request, res:Response) => {
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
        const allProducts = await productsModels.getAllProducts();
        res.status(200).json({"status": "200", "data": allProducts});
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

const getProduct = async (_req: Request, res: Response) => {
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
        const usersData = await productsModels.getProductByName(_req.body.product);
        res.status(200).json({"status": "200", "data": usersData});
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

const addNewProducts = async (_req: Request, res: Response) => {
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
        const newItem = await productsModels.addNewProducts(_req.body.product, _req.body.price);
        res.status(200).json({"status code": 200, newItem});
    }catch (err) {
        res.status(400);
        res.json(err);
    }
}


const updateProductInfo = async (_req:Request, res:Response) => {
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
        const updatedData = await productsModels.updateProductInfo(_req.body.productId,_req.body.productPrice);
        res.status(200).json(updatedData);
    } catch (err) {
        res.status(400);
        res.json({err: err});
    }
}

const deleteProducts = async (_req: Request, res: Response) => {
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
        const newItem = await productsModels.deleteProduct(_req.body.productId);
        res.status(200).json({"status code": 200, newItem});
    }catch (err) {
        res.status(400);
        res.json(err);
    }
}


const productsRoutes = (app: express.Application) => {

    app.get('/products/allProducts', getProducts);
    app.post('/products/productByName', getProduct);  ///{"product":"Apple"} is the body
    app.post('/products/addNewProducts', addNewProducts); ///{"product":"Coconut","price":90} is the body
    app.put('/products/updateProductPrice', updateProductInfo); /// {"productId":"2","productPrice": 12}
    app.post('/products/deleteProduct', deleteProducts); ////{"productId": "3"}
}

export default productsRoutes;