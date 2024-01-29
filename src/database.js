"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { POSTGRES_HOST, POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_TEST_DATABASE, ENV, } = process.env;
let client;
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
else {
    console.log(ENV);
    console.log(POSTGRES_TEST_DATABASE);
    client = new pg_1.Pool({
        host: '127.0.0.1',
        database: 'storefront_app_test_db',
        user: 'Lapi',
        password: '#03Malapile#03'
    });
}
exports.default = client;
