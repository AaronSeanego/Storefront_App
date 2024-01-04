"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const database_1 = __importDefault(require("../database"));
const jwt = require("jsonwebtoken");
const products_1 = require("../models/products");
const productsModels = new products_1.ProductsModels();
const getProducts = async (_req, res) => {
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
        const allProducts = await productsModels.getAllProducts();
        console.log(allProducts);
        res.status(200).json({ "status": "200", "data": allProducts });
        database_1.default.release();
    }
    catch (err) {
        // res.status(400);
        // res.json(err);
    }
};
const getProduct = async (_req, res) => {
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
        const usersData = await productsModels.getProductByName(_req.body.product);
        console.log(usersData.user);
        res.status(200).json({ "status": "200", "data": usersData });
        database_1.default.release();
    }
    catch (err) {
        // console.error(err);
        // res.status(400);
        // res.json(err);
    }
};
const addNewProducts = async (_req, res) => {
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
        const newItem = await productsModels.addNewProducts(_req.body.product, _req.body.price);
        // res.send(newItem);
        res.status(200).json({ "status code": 200, newItem });
        database_1.default.release();
    }
    catch (err) {
        // res.status(400);
        // res.json(err);
    }
};
const updateProductInfo = async (_req, res) => {
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
        const updatedData = await productsModels.updateProductInfo(_req.body.productId, _req.body.productPrice);
        res.status(200).json(updatedData);
        database_1.default.release();
    }
    catch (err) {
    }
};
const deleteProducts = async (_req, res) => {
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
        const newItem = await productsModels.deleteProduct(_req.body.productId);
        // res.send(newItem);
        res.status(200).json({ "status code": 200, newItem });
        database_1.default.release();
    }
    catch (err) {
        // res.status(400);
        // res.json(err);
    }
};
const productsRoutes = (app) => {
    app.get('/products/allProducts', getProducts);
    app.post('/products/productByName', getProduct); ///{"product":"Apple"} is the body
    app.post('/products/addNewProducts', addNewProducts); ///{"product":"Coconut","price":90} is the body
    app.put('/products/updateProductPrice', updateProductInfo); /// {"productId","2","productPrice": 12}
    app.post('/products/deleteProduct', deleteProducts); ////{"productId": "3"}
};
exports.default = productsRoutes;
