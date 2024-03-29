import express, { Response, Request} from "express";
import dotenv from 'dotenv';
const {Client,Pool} = require('pg');
import client from "../database";

dotenv.config();
const router = express.Router();

let userDataObj = {};
let itemDataObj = {};
let updateResponse = {};
let deletedUserObj:String;
// export type Items {
//     id: Number;
//     item_name: String;
//     item_description: String;
// }

export class ProductsModels {
    
    async getAllProducts(): Promise<any> {
        // @ts-ignore
        // userDataObj = {};
        try {
            const conn = await client.connect();
            const resData = await conn.query('SELECT * FROM products');
            conn.release();
            userDataObj = resData.rows;

            if(resData.rowCount == 0) {
                return {
                    "status": "Failure",
                    "message": "Produts not found!!"
                }
            }else {
                return {
                    "data": userDataObj
                }
            }
            
        } catch (err) {
            console.error(err);
            return {"error": err}
        }
    }


    async getProductByName(product_name: string): Promise<any> {
        // @ts-ignore
        // userDataObj = {};
        try {
            const conn = await client.connect();
            const res = await conn.query("SELECT * FROM products WHERE name ='" + product_name + "'");
            conn.release();
            userDataObj = res.rows;

            if(res.rowCount == 0) {
                return {
                    "status": "Failure",
                    "message": "Product was not found!!"
                }
            }else {
                return {
                    "data": userDataObj
                }
            }
            // return userDataObj;
        } catch (err) {
            console.error(err);
            return {"error": err}
        }
    }


    async addNewProducts(productName:string, productPrice:number): Promise<any> {
        console.log(productName, productPrice);
        //@ts-ignore
        // updateResponse = {};
        try {
            const conn = await client.connect();
            const newItems = await conn.query("INSERT INTO products (name, price) VALUES ('" + productName + "','" + productPrice + "')");
            conn.release();
            updateResponse = newItems.rows;
            if(newItems.rowCount == 0) {
                return {
                    "status": "Failure",
                    "message": "Items could not be inserted into the database"
                }
            }else {
                return {
                    "status": "Successful",
                    "message": "Record successfully added into the database",
                    "data": newItems.rows
                }
            }
    
        } catch (err) {
            console.error(err);
            return {"error": err}
        }
    }


    async updateProductInfo(productId: string, productPrice: number): Promise<any> {
        try {
            const conn = await client.connect();
            const updatedData = await conn.query("UPDATE products SET price = '" + productPrice + "' WHERE id = '" + productId + "'");
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
        }
    }

    async deleteProduct(productId: string): Promise<any> {
        try {
            const conn = await client.connect();
            const deletedProduct = await conn.query("DELETE FROM products WHERE id ='" + productId + "'");
            conn.release();
            if(deletedProduct.rowCount == 0) {
                return {
                    "status": "Failure",
                    "message": "Record failed to be deleted from the database"
                }
            }else {
                return {
                    "status": "Successful",
                    "message": "Record successfully deleted from the database"
                }
            }
        } catch (err) {
            console.error(err);
            return {error: err}
        }

    }
}