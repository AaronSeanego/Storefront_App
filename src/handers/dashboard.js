"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const database_1 = __importDefault(require("../database"));
const jwt = require("jsonwebtoken");
const dashboard_1 = require("../services/dashboard");
const dashboardMethod = new dashboard_1.DashBoardModels();
const getJoinedData = async (_req, res) => {
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
        const joindedInfo = await dashboardMethod.getJoined();
        console.log(joindedInfo);
        res.status(200).json(joindedInfo);
        database_1.default.release();
    }
    catch (err) {
    }
};
const getProductPrice = async (_req, res) => {
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
        const products = await dashboardMethod.getProductByLike(_req.params.nameString);
        res.status(200).json(products);
        database_1.default.release();
    }
    catch (err) {
    }
};
const getProductPriceRange = async (_req, res) => {
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
        const products = await dashboardMethod.getProductByLike(_req.params.nameString);
        res.status(200).json(products);
        database_1.default.release();
    }
    catch (err) {
    }
};
const dashBoardRoutes = (app) => {
    app.get('/dashboard/joinedData', getJoinedData);
    app.get('/dashboard/getProductByPrice/:nameString', getProductPrice);
    app.get('/dashboard/getProductByPriceRange/minPrice=:min&maxPrice=:max', getProductPriceRange);
};
exports.default = dashBoardRoutes;
