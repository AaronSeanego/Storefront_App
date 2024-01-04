import express, {Express, Request,Response, response} from 'express';
import { UserModels } from "../users";
import { ProductsModels } from "../products";
import { OrderModels } from "../orders";
import { OrderProductsModels } from "../order_products";
import users_func from "../../handers/users";
import productsRoutes from "../../handers/products";
import orderRoutes from "../../handers/orders";
import ordersProductsRoutes from "../../handers/orders_products";
const request = require('request');

const users = new UserModels();
const products = new ProductsModels();
const orders = new OrderModels();
const orderProducts = new OrderProductsModels();

const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IlN1Y2Nlc3NmdWwiLCJtZXNzYWdlIjoiUmVjb3JkIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIn0sImlhdCI6MTcwNDEzODA4OX0.tQ0AjT4Csq_mTwpPuFDZ9A7-VZU_SernpXE8LADZSC8";
describe('User Models', () => {
    it('getUsers function should exist', () => {
        expect(users.getUsers()).toBeDefined();
    })

    it('getUsers function should return a json object', async () => {
        const usersInfo = await users.getUsers();
        expect(usersInfo).not.toEqual([]);
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('userLogin function should exist', () => {
        expect(users.userLogin('Alpha','alpha@12345')).toBeDefined();
    })

    it('userLogin function should return a message object with message that says user logged in', async () => {
        const usersInfo = await users.userLogin('Alpha','alpha@12345');
        expect(usersInfo).not.toEqual([]);
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    it('createUser function should exist', () => {
        expect(users.createUser('Echo','echo@1234','echo@gmail.com','Echo','Foxtrot')).toBeDefined();
    })

    it('createUser function should return a json object containing user info and token', async () => {
        const usersInfo = await users.createUser('Echo','echo@1234','echo@gmail.com','Echo','Foxtrot');
        expect(usersInfo).not.toEqual([]);
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('updateUser function should exist', () => {
        expect(users.updateUserInfo('Echo','echo.foxtrot@gmail.com')).toBeDefined();
    })

    it('updateUser function should return a json object containing user info and token', async () => {
        const usersInfo = await users.updateUserInfo('Echo','echo.foxtrot@gmail.com');
        expect(usersInfo).not.toEqual([]);
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    it('deleteUser function should exist', () => {
        expect(users.deleteUser('echo.foxtrot@gmail.com')).toBeDefined();
    })

    it('deleteUser function should return a json object containing delete message', async () => {
        const usersInfo = await users.deleteUser('echo.foxtrot@gmail.com');
        expect(usersInfo).not.toEqual([]);
    });
})

describe('Testing Users Endpoints', () => {
    describe('Get /users/allUsers', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/users/allUsers',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request.get(options, (req:Request, res:Response) => {
                expect(res.statusCode).toEqual(200);
                expect(req.body).toEqual({});
            });
        })
    });

    describe('Post /users/login', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/users/login',
                body: {
                    "username":"Beta",
                    "password":"beta@12345"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request.post(options, (req:Request, res:Response) => {
                expect(res.statusCode).toEqual(200);
                expect(req.body).toEqual({});
            });
        })
    });

    describe('Post /users/register', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/users/register',
                body: {
                    "username":"Beta",
                    "password":"beta@12345"
                }
            };

            request.post(options, (req:Request, res:Response) => {
                expect(res.statusCode).toEqual(200);
                expect(req.body).toEqual({});
            });
        })
    });

    describe('Put /users/updateEmail', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/users/updateEmail',
                body: {
                    "username":"Beta",
                    "password":"beta@12345"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request.put(options, (req:Request, res:Response) => {
                expect(res.statusCode).toEqual(200);
                expect(req.body).toEqual({});
            });
        })
    });

    describe('Post /users/deleteUser', () => {
        it('API response should be a json', (done) => {
            const options = {
                url: '127.0.0.1:3000/users/deleteUser',
                body: {
                    "username":"Beta",
                    "password":"beta@12345"
                },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            request.post(options, (req:Request, res:Response) => {
                expect(res.statusCode).toEqual(200);
                expect(req.body).toEqual({});
            });
        })
    });
})