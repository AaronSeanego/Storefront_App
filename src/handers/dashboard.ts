import express, { Response, Request} from "express";
const bcrypt = require("bcrypt");
import client from "../database";
const jwt = require("jsonwebtoken");
import { DashBoardModels } from "../services/dashboard";

const dashboardMethod = new DashBoardModels();

const getJoinedData = async (_req:Request, res:Response) => {
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
        const joindedInfo = await dashboardMethod.getJoined();
        console.log(joindedInfo);
        res.status(200).json(joindedInfo);
        // client.release();
    } catch (err) {

    }

}

const getProductPrice = async (_req:Request, res:Response) => {
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
        const products = await dashboardMethod.getProductByLike(_req.params.nameString);
        res.status(200).json(products);
        // client.release();
    } catch (err) {

    }
}

const getProductPriceRange = async (_req:Request, res:Response) => {
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
        const products = await dashboardMethod.getProductByLike(_req.params.nameString);
        res.status(200).json(products);
        // client.release();
    } catch (err) {

    }
}


const dashBoardRoutes = (app: express.Application) => {
    app.get('/dashboard/joinedData', getJoinedData);
    app.get('/dashboard/getProductByPrice/:nameString', getProductPrice);
    app.get('/dashboard/getProductByPriceRange/minPrice=:min&maxPrice=:max', getProductPriceRange);
}

export default dashBoardRoutes;