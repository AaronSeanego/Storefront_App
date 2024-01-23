"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bcrypt = require("bcrypt");
var database_1 = __importDefault(require("../database"));
var jwt = require("jsonwebtoken");
var users_1 = require("../models/users");
var users = new users_1.UserModels();
var getUsers = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorizationHeader, token, usersData, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    authorizationHeader = _req.headers.authorization;
                    token = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(' ')[1];
                    // console.log(token);
                    // const token = authorizationHeader.split(' ')[1];
                    jwt.verify(token, process.env.TOKEN_SECRET);
                }
                catch (err) {
                    res.status(401);
                    res.json("Invalid token ".concat(err));
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, users.getUsers()];
            case 2:
                usersData = _a.sent();
                console.log(usersData.user);
                res.status(200).json({ "status": "200", "data": usersData });
                database_1["default"].release();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var userLogin = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorizationHeader, token, usersData, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    authorizationHeader = _req.headers.authorization;
                    token = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(' ')[1];
                    console.log(token);
                    // const token = authorizationHeader.split(' ')[1];
                    jwt.verify(token, process.env.TOKEN_SECRET);
                }
                catch (err) {
                    res.status(401);
                    res.json("Invalid token ".concat(err));
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, users.userLogin(_req.body.username, _req.body.password)];
            case 2:
                usersData = _a.sent();
                console.log(usersData.user);
                res.status(200).json({ "status": "200", "data": usersData });
                database_1["default"].release();
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var createNewUser = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newUsers_Info, token, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(_req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, users.createUser(_req.body.username, _req.body.password, _req.body.email, _req.body.firstname, _req.body.lastname)];
            case 2:
                newUsers_Info = _a.sent();
                console.log(newUsers_Info);
                token = jwt.sign({ user: newUsers_Info }, process.env.TOKEN_SECRET);
                res.status(200).json({ "status": "200", "data": newUsers_Info, "token": token });
                database_1["default"].release();
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateUserInfo = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorizationHeader, token, updatedData, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    authorizationHeader = _req.headers.authorization;
                    token = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(' ')[1];
                    console.log(token);
                    // const token = authorizationHeader.split(' ')[1];
                    jwt.verify(token, process.env.TOKEN_SECRET);
                }
                catch (err) {
                    res.status(401);
                    res.json("Invalid token ".concat(err));
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, users.updateUserInfo(_req.body.userName, _req.body.userEmail)];
            case 2:
                updatedData = _a.sent();
                res.status(200).json(updatedData);
                database_1["default"].release();
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var deleteUser = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorizationHeader, token, deleteUser_Data, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    authorizationHeader = _req.headers.authorization;
                    token = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(' ')[1];
                    console.log(token);
                    // const token = authorizationHeader.split(' ')[1];
                    jwt.verify(token, process.env.TOKEN_SECRET);
                }
                catch (err) {
                    res.status(401);
                    res.json("Invalid token ".concat(err));
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, users.deleteUser(_req.body.username)];
            case 2:
                deleteUser_Data = _a.sent();
                console.log(deleteUser_Data);
                res.status(200).json({ "status": "200", "data": deleteUser_Data });
                database_1["default"].release();
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var users_func = function (app) {
    app.get('/users/allUsers', getUsers);
    app.post('/users/login', userLogin); ///{"username":"Beta","password":"beta@12345"} is to be passed as body
    app.post('/users/register', createNewUser); ////{"username":"Echo","password":"echo@12345","email":"email@gmail.com","firstname":"Echo","lastname":"Foxtrot"} is the body
    app.put('/users/updateEmail', updateUserInfo); ////{"userName": "Alpha", "userEmail": "alpha@alpha.com"}
    app.post('/users/deleteUser', deleteUser); ////{"username":"Echo"} is the body
};
exports["default"] = users_func;
