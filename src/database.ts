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

let serverData:any = {};


if(ENV == "dev") {
    console.log(ENV);
    console.log(POSTGRES_DATABASE);
    // client = new Pool({
    //     host: POSTGRES_HOST,
    //     database: POSTGRES_DATABASE,
    //     user: POSTGRES_USER,
    //     password: POSTGRES_PASSWORD
    // });

    serverData = {
        host: POSTGRES_HOST,
        database: POSTGRES_DATABASE,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    };
}else if(ENV == "test") {
    console.log(ENV);
    console.log(POSTGRES_TEST_DATABASE);
   
    // client = new Pool({
    //     host: POSTGRES_HOST,
    //     database: POSTGRES_TEST_DATABASE,
    //     user: POSTGRES_USER,
    //     password: POSTGRES_PASSWORD
    // });

    serverData = {
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DATABASE,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    };
    
}

let client: Pool = new Pool(serverData);



export default client;