"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
let client;
const { POSTGRES_HOST, POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_TEST_DATABASE, ENV, } = process.env;
if (process.env.ENV == "dev") {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DATABASE,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
if (process.env.ENV == "test") {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DATABASE,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
exports.default = client;
