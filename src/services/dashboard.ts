import express, {Express,Request, Response} from 'express';
import dotenv from 'dotenv';
import client from "../database";
const bcrypt = require('bcrypt');

dotenv.config();

let joinedData:any;
let products:any;

export class DashBoardModels {
    async getJoined() : Promise<any> {
        try {
            const conn = await client.connect();
            const joinedTable = await conn.query('SELECT name, price, orders_id FROM products INNER JOIN orders_products ON products.id = orders_products.id');
            conn.release();
            joinedData = joinedTable.rows;
            if(joinedTable.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "Could not find data"
                }
            }else {
                return {
                    joinedData
                }
            }
        } catch (e) {
            console.error(e);
            return {"error": e};
        }
    }

    async getProductByLike(nameString:string): Promise<any> {
        try {
            const conn = await client.connect();
            const productByPrice = await conn.query("SELECT name,price FROM products WHERE name LIKE '%" + nameString + "%'");
            conn.release();
            products = productByPrice.rows;
            if(productByPrice.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "There is no data for this query"
                }
            }else {
                return {
                    products
                }
            }
        } catch (err) {
            console.log(err);
            return {"error": err};
        }
    }

    async getProductByPriceRange(minPrice:string,maxPrice:string): Promise<any> {
        try {
            const conn = await client.connect();
            const productByPrice = await conn.query("SELECT * FROM products WHERE price BETWEEN '" + minPrice + "' AND '" + maxPrice + "'");
            conn.release();
            products = productByPrice.rows;
            if(productByPrice.rowCount == 0) {
                return {
                    "status": "Failed",
                    "message": "There is no data for this query"
                }
            }else {
                return {
                    products
                }
            }
        } catch (err) {
            console.log(err);
            return {"error": err};
        }
    }
}