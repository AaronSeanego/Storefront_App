"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductsModels = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const { Client, Pool } = require('pg');
const database_1 = __importDefault(require("../database"));
dotenv_1.default.config();
const router = express_1.default.Router();
let ordersProductsList;
class OrderProductsModels {
    async getOrderedProducts(orderId) {
        console.log("Order ID: " + orderId);
        try {
            await database_1.default.connect();
            const orderedProducts = await database_1.default.query("SELECT * FROM orders_products WHERE orders_id = '" + orderId + "'");
            ordersProductsList = orderedProducts.rows;
            if (orderedProducts.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "There are no products available"
                };
            }
            else {
                return {
                    ordersProductsList
                };
            }
        }
        catch (e) {
            console.error(e);
        }
        finally {
        }
    }
    async createOrderProducts(quantity, orders_id, product_id) {
        try {
            await database_1.default.connect();
            const newOrderProducts = await database_1.default.query("INSERT INTO orders_products(quantity,orders_id,products_id) VALUES('" + quantity + "','" + orders_id + "','" + product_id + "')");
            ordersProductsList = newOrderProducts.rows;
            if (newOrderProducts.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "New record could not be created"
                };
            }
            else {
                return {
                    "status": "Successful",
                    "message": "New products added to order"
                };
            }
        }
        catch (e) {
            console.log(e);
        }
        finally {
        }
    }
    async updateOrdersInfo(quantity, order_id, product_id) {
        try {
            await database_1.default.connect();
            const updatedData = await database_1.default.query("UPDATE orders_products SET quantity = '" + quantity + "' WHERE orders_id = '" + order_id + "' AND products_id = '" + product_id + "'");
            if (updatedData.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "Failed to update record"
                };
            }
            else {
                return {
                    "status": "Successful",
                    "message": "Record updated successfully"
                };
            }
        }
        catch (err) {
        }
    }
}
exports.OrderProductsModels = OrderProductsModels;
