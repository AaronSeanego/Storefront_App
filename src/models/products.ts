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
        userDataObj = {};
        try {
            await client.connect();
            const resData = await client.query('SELECT * FROM products');
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
        } finally {
            // client.release();
        }
    }


    async getProductByName(product_name: string): Promise<any> {
        // @ts-ignore
        userDataObj = {};
        try {
            await client.connect();
            const res = await client.query("SELECT * FROM products WHERE name ='" + product_name + "'");
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
        } finally {
            // client.release();
        }
    }


    async addNewProducts(productName:string,productPrice:number): Promise<any> {
        //@ts-ignore
        updateResponse = {};
        try {
            await client.connect();
            const newItems = await client.query("INSERT INTO products (name,price) VALUES ('" + productName + "','" + productPrice + "')");
            // const newItems = await client.query("INSERT INTO store_items (item_name,item_description) VALUES (" + item_Name + "," + item_Description + ")");
            updateResponse = newItems.rows;
            console.log(updateResponse);
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
        } finally {
            // client.release();
        }
    }


    async updateProductInfo(productId: string, productPrice: number): Promise<any> {
        try {
            await client.connect();
            const updatedData = await client.query("UPDATE products SET price = '" + productPrice + "' WHERE id = '" + productId + "'");
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
            await client.connect();
            const deletedProduct = await client.query("DELETE FROM products WHERE id ='" + productId + "'");
            // deletedUserObj = deletedProduct;
            // console.log(deletedUserObj);

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
            throw err;
        } finally {
            // client.end();
            // await client.release();
        }

    }
}