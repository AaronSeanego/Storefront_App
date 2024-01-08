"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const users_1 = require("../users");
const products_1 = require("../products");
const orders_1 = require("../orders");
const order_products_1 = require("../order_products");
// const request = require('request');
const request = require('request-promise');
// import client from '../../database';
const users = new users_1.UserModels();
const products = new products_1.ProductsModels();
const orders = new orders_1.OrderModels();
const orderProducts = new order_products_1.OrderProductsModels();
let client;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IlN1Y2Nlc3NmdWwiLCJtZXNzYWdlIjoiUmVjb3JkIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIn0sImlhdCI6MTcwNDcxMzE1NX0.Q0BhTRhvF1DPN-NT04W1VOrGk7CpQVqhkrJ5P-x_TNA";
describe('User Models', () => {
    const { POSTGRES_HOST, POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_TEST_DATABASE, ENV, } = process.env;
    let client;
    beforeAll(() => {
        client = new pg_1.Pool({
            host: '127.0.0.1',
            database: 'storefront_app_test_db',
            user: 'Lapi',
            password: '#03Malapile#03'
        });
        client.connect();
    });
    afterAll(() => {
        client.end();
    });
    it('getUsers function should exist', async () => {
        const usersInfo = await users.getUsers();
        expect(users.getUsers()).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    });
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    it('userLogin function should return a message object with message that says user logged in', async () => {
        const usersInfo = await users.userLogin('Alpha', 'alpha@12345');
        expect(users.userLogin('Alpha', 'alpha@12345')).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    });
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    it('createUser function should return a json object containing user info and token', async () => {
        const usersInfo = await users.createUser('Echo', 'echo@1234', 'echo@gmail.com', 'Echo', 'Foxtrot');
        expect(users.createUser('Echo', 'echo@1234', 'echo@gmail.com', 'Echo', 'Foxtrot')).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    });
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    it('updateUser function should return a json object containing user info and token', async () => {
        const usersInfo = await users.updateUserInfo('Echo', 'echo.foxtrot@gmail.com');
        expect(users.updateUserInfo('Echo', 'echo.foxtrot@gmail.com')).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    });
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    it('deleteUser function should return a json object containing delete message', async () => {
        const usersInfo = await users.deleteUser('echo.foxtrot@gmail.com');
        expect(users.deleteUser('echo.foxtrot@gmail.com')).toBeDefined();
        expect(usersInfo.length).toBeGreaterThan(0);
    });
});
describe('Testing Users Endpoints', () => {
    describe('Post /users/register', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/users/register',
                body: {
                    "username": "Alpha",
                    "password": "alpha@12345",
                    "email": "alpha.beta@gmail.com",
                    "firstname": "Alpha",
                    "lastname": "Beta"
                }
            };
            request(options).then((response) => {
                expect(response.status).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            }).catch((err) => {
                console.error(err);
            });
        });
    });
    describe('Post /users/login', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/users/login',
                body: {
                    "username": "Alpha",
                    "password": "Alpha@12345"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };
            request(options).then((response) => {
                expect(response.status).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            }).catch((err) => {
            });
        });
    });
    describe('Get /users/allUsers', () => {
        it('should retrieve all users', () => {
            const options = {
                method: 'GET',
                uri: 'http://127.0.0.1:3000/users/allUsers',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };
            request(options).then((response) => {
                expect(response.status).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            }).catch((err) => {
            });
        });
    });
    describe('Put /users/updateEmail', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'PUT',
                uri: 'http://127.0.0.1:3000/users/updateEmail',
                body: {
                    "userName": "Alpha",
                    "userEmail": "alpha@alpha.com"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                },
            };
            request(options).then((response) => {
                expect(response.status).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            }).catch((err) => {
            });
        });
    });
    describe('Post /users/deleteUser', () => {
        it('API response should be a json', () => {
            const options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/users/deleteUser',
                body: {
                    "username": "Beta",
                    "password": "beta@12345"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };
            request(options).then((response) => {
                expect(response.status).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            }).catch((err) => {
            });
        });
    });
});
