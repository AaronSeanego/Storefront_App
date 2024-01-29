/* Replace with your SQL commands */

CREATE DATABASE IF NOT EXISTS storefront_app_test_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    firstname VARCHAR(255),
    lastname VARCHAR(255)
);
-- 
-- 
-- 
-- 



CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price INTEGER
);

-- 
-- 
-- 
-- 

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(255),
    users_id bigint REFERENCES users(id)
);

-- 
-- 
-- 
-- 

CREATE TABLE orders_products (
    id SERIAL PRIMARY KEY,
    quantity INTEGER,
    orders_id INTEGER REFERENCES orders(id),
    products_id INTEGER REFERENCES products(id)
);

