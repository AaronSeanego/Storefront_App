"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModels = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const { Client, Pool } = require('pg');
const database_1 = __importDefault(require("../database"));
dotenv_1.default.config();
const router = express_1.default.Router();
let userDataObj = {};
let itemDataObj = {};
let updateResponse = {};
let deletedUserObj;
// export type Items {
//     id: Number;
//     item_name: String;
//     item_description: String;
// }
class ProductsModels {
    async getAllProducts() {
        // @ts-ignore
        userDataObj = {};
        try {
            await database_1.default.connect();
            const resData = await database_1.default.query('SELECT * FROM products');
            userDataObj = resData.rows;
            if (resData.rowCount == 0) {
                return {
                    "status": "Failure",
                    "message": "Produts not found!!"
                };
            }
            else {
                return {
                    "data": userDataObj
                };
            }
        }
        catch (err) {
            console.error(err);
        }
        finally {
            // client.release();
        }
    }
    async getProductByName(product_name) {
        // @ts-ignore
        userDataObj = {};
        try {
            await database_1.default.connect();
            const res = await database_1.default.query("SELECT * FROM products WHERE name ='" + product_name + "'");
            userDataObj = res.rows;
            if (res.rowCount == 0) {
                return {
                    "status": "Failure",
                    "message": "Product was not found!!"
                };
            }
            else {
                return {
                    "data": userDataObj
                };
            }
            // return userDataObj;
        }
        catch (err) {
            console.error(err);
        }
        finally {
            // client.release();
        }
    }
    async addNewProducts(productName, productPrice) {
        //@ts-ignore
        updateResponse = {};
        try {
            await database_1.default.connect();
            const newItems = await database_1.default.query("INSERT INTO products (name,price) VALUES ('" + productName + "','" + productPrice + "')");
            // const newItems = await client.query("INSERT INTO store_items (item_name,item_description) VALUES (" + item_Name + "," + item_Description + ")");
            updateResponse = newItems.rows;
            console.log(updateResponse);
            if (newItems.rowCount == 0) {
                return {
                    "status": "Failure",
                    "message": "Items could not be inserted into the database"
                };
            }
            else {
                return {
                    "status": "Successful",
                    "message": "Record successfully added into the database",
                    "data": newItems.rows
                };
            }
        }
        catch (err) {
            console.error(err);
        }
        finally {
            // client.release();
        }
    }
    async updateProductInfo(productId, productPrice) {
        try {
            await database_1.default.connect();
            const updatedData = await database_1.default.query("UPDATE products SET price = '" + productPrice + "' WHERE id = '" + productId + "'");
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
    async deleteProduct(productId) {
        try {
            await database_1.default.connect();
            const deletedProduct = await database_1.default.query("DELETE FROM products WHERE id ='" + productId + "'");
            // deletedUserObj = deletedProduct;
            // console.log(deletedUserObj);
            if (deletedProduct.rowCount == 0) {
                return {
                    "status": "Failure",
                    "message": "Record failed to be deleted from the database"
                };
            }
            else {
                return {
                    "status": "Successful",
                    "message": "Record successfully deleted from the database"
                };
            }
        }
        catch (err) {
            console.error(err);
            throw err;
        }
        finally {
            // client.end();
            // await client.release();
        }
    }
}
exports.ProductsModels = ProductsModels;
