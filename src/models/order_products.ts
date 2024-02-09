import express, { Response, Request} from "express";
import dotenv from 'dotenv';
const {Client,Pool} = require('pg');
import client from "../database";

dotenv.config();
const router = express.Router();

let ordersProductsList:any;
export class OrderProductsModels {

    async getOrderedProducts(orderId:string): Promise<any> {

        try {
            await client.connect();
            const orderedProducts = await client.query("SELECT * FROM orders_products WHERE orders_id = '" + orderId + "'");
            ordersProductsList = orderedProducts.rows;
            if(orderedProducts.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "There are no products available"
                }
            }else {
                return {
                    ordersProductsList
                }
            }
        } catch (e) {
            console.error(e);
            return {"error": e};
        }
    }

    async createOrderProducts(quantity:number, orders_id:number, product_id:number): Promise<any> {
        
        try {
            await client.connect();
            const newOrderProducts = await client.query("INSERT INTO orders_products(quantity,orders_id,products_id) VALUES('" + quantity + "','" + orders_id + "','" + product_id + "')");
            ordersProductsList = newOrderProducts.rows;

            if(newOrderProducts.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "New record could not be created"
                }
            }else {
                return {
                    "status": "Successful",
                    "message": "New products added to order"
                }
            }
        } catch (e) {
            console.log(e);
            return {"error": e};
        }
    }

    async updateOrdersInfo(quantity: number, order_id: number,product_id: number): Promise<any> {
        try {
            await client.connect();
            const updatedData = await client.query("UPDATE orders_products SET quantity = '" + quantity + "' WHERE orders_id = '" + order_id + "' AND products_id = '" + product_id + "'");
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
}