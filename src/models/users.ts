import express, {Express,Request, Response} from 'express';
import dotenv from 'dotenv';
import client from "../database";
const bcrypt = require('bcrypt');

dotenv.config();

let createdUserInforObj = {};
let usersInfoObj:String;
let deletedUserObj = {};

let userInfo;
let signedUser:String;
let passwordCorrect:string = '';
let usersInfo:String;

// export type Users {
//     id:BigInteger,
//     username:String,
//     password:String,
//     email:String
// }

export class UserModels {

    async getUsers(): Promise<any> {
        try {
            await client.connect();
            const userData = await client.query("SELECT * FROM users");
            userInfo = userData.rows;
            if(userData.rowCount == 0) {
                return {
                    "status": "Not Found",
                    "message": "Users not found in the database" 
                };
            }else if(userData.rowCount > 0) {
                return {
                    userInfo
                };
            }

        } catch (err) {
            console.error(err);
            // throw err;
            return {err}
        }
    }

    async userLogin(username:string,password:string): Promise<any> {
        try {
            await client.connect();
            userInfo = await client.query("SELECT password FROM users WHERE username = '" + username + "'");
            // console.log(userInfo.rows);
            const user = userInfo.rows[0];
            
            if(userInfo.rowCount == 0) {
                return {
                    "status": "Not Found",
                    "message": username + " was not found in the database" 
                };
            }else if(userInfo.rowCount > 0) {

                bcrypt.compare(password + "pepper", user.password, (err:string, result:string) => {
                    if (err) {

                    }
                    if(result) {
                        passwordCorrect = 'true';
                    }else {
                        passwordCorrect = 'false';
                    }
                });

                if(passwordCorrect == 'true') {
                    return {
                        "user": username,
                        "status": "Login Successfful",
                        "message": "User was successfully logged in.",
                    };
                }else {
                    return {
                        "status": "Login Failed",
                        "message": "Password did not match",
                    };
                }
            }

        } catch (err) {
            console.error(err);
            return err;
            // throw err;
        }
    }

    async createUser(username: string, password: string, email: string,firstname: string,lastname: string): Promise<any> {
        try {
            await client.connect();
            let hashedPassword = await bcrypt.hash(password + "pepper", 10);
            const newUsers = await client.query("INSERT INTO users (username, password, email, firstname, lastname) VALUES ('" + username + "','" + hashedPassword + "','" + email + "','" + firstname + "','" + lastname + "')");
            createdUserInforObj = newUsers;
            console.log(newUsers);
            if(newUsers.rowCount == 0) {
                return {
                    "status": "Failure",
                    "message": "Record failed to be created"
                }
            }else {
                return {
                    "status": "Successful",
                    "message": "Record successfully created"
                }
            }
        } catch (err) {
            console.error(err);
            return err;
            // throw err;
        }
    }

    async updateUserInfo(userName: string, userEmail: string): Promise<any> {
        try {
            await client.connect();
            const updatedData = await client.query("UPDATE users SET email = '" + userEmail + "' WHERE username = '" + userName + "'");
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
            console.log(err);
            return err;
        }
    }

    async deleteUser(username: string): Promise<any> {
        try {
            await client.connect();
            const deletedUser = await client.query("DELETE FROM users WHERE username ='" + username + "'");
            deletedUserObj = deletedUser;
            console.log(deletedUserObj);

            if(deletedUser.rowCount == 0) {
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
            return err;
        }

    }
}