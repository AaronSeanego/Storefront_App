"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModels = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const { Client, Pool } = require('pg');
const database_1 = __importDefault(require("../database"));
dotenv_1.default.config();
const router = express_1.default.Router();
let orderObj;
let orderInfo;
class OrderModels {
    async getAllOrders() {
        try {
            await database_1.default.connect();
            const orders = await database_1.default.query("SELECT * FROM orders");
            orderObj = orders.rows;
            if (orders.rowCount == 0) {
                return {
                    "status": "Not Found",
                    "message": "No Orders Found"
                };
            }
            else {
                return {
                    orderObj
                };
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    async getOrderById(id) {
        try {
            await database_1.default.connect();
            const order = await database_1.default.query("SELECT * FROM orders WHERE users_id = '" + id + "'");
            orderInfo = order.rows;
            if (order.rowCount == 0) {
                return {
                    "status": "Not Found",
                    "message": "No Orders Found"
                };
            }
            else {
                return {
                    orderInfo
                };
            }
        }
        catch (err) {
        }
    }
    async newOrder(user_id) {
        let orderStatus = "Active";
        try {
            await database_1.default.connect();
            const newOrder = await database_1.default.query("INSERT INTO orders(status,users_id) VALUES ('" + orderStatus + "','" + user_id + "')");
            if (newOrder.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "Failed to create new order"
                };
            }
            else {
                return {
                    "status": "Successful",
                    "message": "New order created successfully"
                };
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    async updateOrderInfo(orderId, orderStatus) {
        try {
            await database_1.default.connect();
            const updatedData = await database_1.default.query("UPDATE orders SET status = '" + orderId + "' WHERE userName = '" + orderStatus + "'");
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
    async deleteOrder(id) {
        try {
            await database_1.default.connect();
            const deletedOrder = await database_1.default.query("DELETE FROM orders WHERE id = '" + id + "'");
            if (deletedOrder.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "Order could not be deleted from the database"
                };
            }
            else {
                return {
                    deletedOrder
                };
            }
        }
        catch (e) {
            console.error(e);
        }
    }
}
exports.OrderModels = OrderModels;
