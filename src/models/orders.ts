import express, { Response, Request} from "express";
import dotenv from 'dotenv';
const {Client,Pool} = require('pg');
import client from "../database";

dotenv.config();
const router = express.Router();

let orderObj:String;
let orderInfo:String;

export class OrderModels {
    async getAllOrders(): Promise<any> {
        try {
            await client.connect();
            const orders = await client.query("SELECT * FROM orders");
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
        }
    }

    async getOrderById(id: String): Promise<any> {
        try {
            await client.connect();
            const order = await client.query("SELECT * FROM orders WHERE users_id = '" + id + "'");
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
            
        }
    }

    async newOrder(user_id:Number): Promise<any> {
        let orderStatus = "Active";
        try {
            await client.connect();
            const newOrder = await client.query("INSERT INTO orders(status,users_id) VALUES ('" + orderStatus + "','" + user_id + "')");
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
        }
    }

    async updateOrderInfo(orderId: string, orderStatus: string): Promise<any> {
        try {
            await client.connect();
            const updatedData = await client.query("UPDATE orders SET status = '" + orderId + "' WHERE userName = '" + orderStatus + "'");
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

        }
    }

    async deleteOrder(id: String): Promise<any> {
        try {
            await client.connect();
            const deletedOrder = await client.query("DELETE FROM orders WHERE id = '" + id + "'");
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
        }
    }
}