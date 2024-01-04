"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashBoardModels = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("../database"));
const bcrypt = require('bcrypt');
dotenv_1.default.config();
let joinedData;
let products;
class DashBoardModels {
    async getJoined() {
        try {
            await database_1.default.connect();
            const joinedTable = await database_1.default.query('SELECT name, price, orders_id FROM products INNER JOIN orders_products ON products.id = orders_products.id');
            joinedData = joinedTable.rows;
            if (joinedTable.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "Could not find data"
                };
            }
            else {
                return {
                    joinedData
                };
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    async getProductByLike(nameString) {
        try {
            await database_1.default.connect();
            const productByPrice = await database_1.default.query("SELECT name,price FROM products WHERE name LIKE '%" + nameString + "%'");
            products = productByPrice.rows;
            if (productByPrice.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "There is no data for this query"
                };
            }
            else {
                return {
                    products
                };
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async getProductByPriceRange(minPrice, maxPrice) {
        try {
            await database_1.default.connect();
            const productByPrice = await database_1.default.query("SELECT * FROM products WHERE price BETWEEN '" + minPrice + "' AND '" + maxPrice + "'");
            products = productByPrice.rows;
            if (productByPrice.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "There is no data for this query"
                };
            }
            else {
                return {
                    products
                };
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.DashBoardModels = DashBoardModels;
