import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import {Pool } from 'pg';

dotenv.config();

const {
    POSTGRES_HOST,
    POSTGRES_DATABASE,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_TEST_DATABASE,
    ENV,
  } = process.env;

let client: any;
// if(process.env.ENV === "dev") {
//     client = new Pool({
//         host: POSTGRES_HOST,
//         database: POSTGRES_DATABASE,
//         user: POSTGRES_USER,
//         password: POSTGRES_PASSWORD
//     });
// }

client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DATABASE,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
});

// if(process.env.ENV === "test") {
//     client = new Pool({
//         host: POSTGRES_HOST,
//         database: POSTGRES_DATABASE,
//         user: POSTGRES_USER,
//         password: POSTGRES_PASSWORD
//     });
// }

export default client;