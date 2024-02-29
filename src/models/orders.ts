import express, { Response, Request} from "express";
import dotenv from 'dotenv';
const {Client,Pool} = require('pg');
import client from "../database";

dotenv.config();
const router = express.Router();

let orderObj:any;
let orderInfo:any;

export class OrderModels {
    async getAllOrders(): Promise<any> {
        try {
            const conn = await client.connect();
            const orders = await conn.query("SELECT * FROM orders");
            conn.release();
            orderObj = orders.rows;

            if(orders.rowCount == 0) {
                return {
                    "status" : "Not Found",
                    "message": "No Orders Found"
                }
            }else {
                return {
                    orderObj
                }
            }
        } catch (err) {
            console.error(err);
            return {"error": err};
        }
    }

    async getOrderById(id: string): Promise<any> {
        try {
            const conn = await client.connect();
            const order = await conn.query("SELECT * FROM orders WHERE users_id = '" + id + "'");
            conn.release();
            orderInfo = order.rows;

            if(order.rowCount == 0) {
                return {
                    "status" : "Not Found",
                    "message": "No Orders Found"
                }
            }else {
                return {
                    orderInfo
                }
            }
        } catch (err) {
            console.error(err);
            return {"error": err};
        }
    }

    async newOrder(user_id:number): Promise<any> {
        let orderStatus = "Active";
        try {
            const conn = await client.connect();
            const newOrder = await conn.query("INSERT INTO orders(status,users_id) VALUES ('" + orderStatus + "','" + user_id + "')");
            conn.release();
            if(newOrder.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "Failed to create new order"
                }
            }else {
                return {
                    "status": "Successful",
                    "message": "New order created successfully"
                }
            }
        } catch (err) {
            console.error(err);
            return {"error": err};
        }
    }

    async updateOrderInfo(orderId: string, orderStatus: string): Promise<any> {
        try {
            const conn = await client.connect();
            const updatedData = await conn.query("UPDATE orders SET status = '" + orderStatus + "' WHERE id = '" + orderId + "'");
            conn.release();
            if(updatedData.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "Failed to update record"
                }
            }else {
                return {
                    "status": "Successful",
                    "message": "Record updated successfully"
                }
            }
        } catch (err) {
            console.error(err);
            return {"error": err};
        }
    }

    async deleteOrder(id: string): Promise<any> {
        try {
            const conn = await client.connect();
            const deletedOrder = await conn.query("DELETE FROM orders WHERE id = '" + id + "'");
            conn.release();
            if(deletedOrder.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "Order could not be deleted from the database"
                }
            }else {
                return {
                    deletedOrder
                }
            }
        } catch (e) {
            console.error(e);
            return {"error": e};
        }
    }
}