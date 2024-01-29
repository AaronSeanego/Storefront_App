"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1["default"].config();
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DATABASE = _a.POSTGRES_DATABASE, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, POSTGRES_TEST_DATABASE = _a.POSTGRES_TEST_DATABASE, ENV = _a.ENV;
var client;
if (ENV == "dev") {
    console.log(ENV);
    console.log(POSTGRES_DATABASE);
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DATABASE,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
else if (ENV == "test") {
    console.log(ENV);
    console.log(POSTGRES_TEST_DATABASE);
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DATABASE,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
exports["default"] = client;
