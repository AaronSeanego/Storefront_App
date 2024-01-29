"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const database_1 = __importDefault(require("../database"));
const jwt = require("jsonwebtoken");
const users_1 = require("../models/users");
const users = new users_1.UserModels();
const getUsers = async (_req, res) => {
    try {
        // const authorizationHeader = _req.headers.authorization;
        const authorizationHeader = _req.headers.authorization;
        // const token = authorizationHeader?.slice(7,authorizationHeader.length);
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
        const usersData = await users.getUsers();
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
const userLogin = async (_req, res) => {
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
        const usersData = await users.userLogin(_req.body.username, _req.body.password);
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
const createNewUser = async (_req, res) => {
    console.log(_req.body);
    try {
        const newUsers_Info = await users.createUser(_req.body.username, _req.body.password, _req.body.email, _req.body.firstname, _req.body.lastname);
        console.log(newUsers_Info);
        var token = jwt.sign({ user: newUsers_Info }, process.env.TOKEN_SECRET);
        res.status(200).json({ "status": "200", "data": newUsers_Info, "token": token });
        database_1.default.release();
    }
    catch (err) {
        // res.status(400);
        // res.json(err);
    }
};
const updateUserInfo = async (_req, res) => {
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
        const updatedData = await users.updateUserInfo(_req.body.userName, _req.body.userEmail);
        res.status(200).json(updatedData);
        database_1.default.release();
    }
    catch (err) {
    }
};
const deleteUser = async (_req, res) => {
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
        const deleteUser_Data = await users.deleteUser(_req.body.username);
        console.log(deleteUser_Data);
        res.status(200).json({ "status": "200", "data": deleteUser_Data });
        database_1.default.release();
    }
    catch (err) {
        // res.status(400);
        // res.json(err);
    }
};
const users_func = (app) => {
    app.get('/users/allUsers', getUsers);
    app.post('/users/login', userLogin); ///{"username":"Beta","password":"beta@12345"} is to be passed as body
    app.post('/users/register', createNewUser); ////{"username":"Echo","password":"echo@12345","email":"email@gmail.com","firstname":"Echo","lastname":"Foxtrot"} is the body
    app.put('/users/updateEmail', updateUserInfo); ////{"userName": "Alpha", "userEmail": "alpha@alpha.com"}
    app.post('/users/deleteUser', deleteUser); ////{"username":"Echo"} is the body
};
exports.default = users_func;
