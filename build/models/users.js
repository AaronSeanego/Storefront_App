"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModels = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("../database"));
const bcrypt = require('bcrypt');
dotenv_1.default.config();
let createdUserInforObj = {};
let usersInfoObj;
let deletedUserObj = {};
let userInfo;
let signedUser;
let passwordCorrect;
let usersInfo;
// export type Users {
//     id:BigInteger,
//     username:String,
//     password:String,
//     email:String
// }
class UserModels {
    async getUsers() {
        try {
            await database_1.default.connect();
            const userData = await database_1.default.query("SELECT * FROM users");
            // console.log(userInfo.rows);
            userInfo = userData.rows;
            if (userData.rowCount == 0) {
                return {
                    "status": "Not Found",
                    "message": "Users not found in the database"
                };
            }
            else if (userData.rowCount > 0) {
                return {
                    userInfo
                };
            }
        }
        catch (err) {
            console.error(err);
            throw err;
        }
        finally {
            console.log(usersInfoObj);
            // client.end();
            // await client.release();
        }
    }
    async userLogin(username, password) {
        try {
            await database_1.default.connect();
            userInfo = await database_1.default.query("SELECT password FROM users WHERE username = '" + username + "'");
            // console.log(userInfo.rows);
            if (userInfo.rowCount == 0) {
                return {
                    "status": "Not Found",
                    "message": username + " was not found in the database"
                };
            }
            else if (userInfo.rowCount > 0) {
                if (userInfo.rows.length) {
                    const user = userInfo.rows[0];
                    bcrypt.compare(password + "pepper", user.password, (err, result) => {
                        if (err) {
                        }
                        if (result) {
                            passwordCorrect = true;
                        }
                        else {
                            passwordCorrect = false;
                        }
                    });
                }
                if (passwordCorrect == true) {
                    return {
                        "user": username,
                        "status": "Login Successfful",
                        "message": "User was successfully logged in.",
                    };
                }
                else {
                    return {
                        "status": "Login Failed",
                        "message": "Password did not match",
                    };
                }
            }
        }
        catch (err) {
            console.error(err);
            throw err;
        }
        finally {
            console.log(usersInfoObj);
            // client.end();
            // await client.release();
        }
    }
    async createUser(username, password, email, firstname, lastname) {
        try {
            await database_1.default.connect();
            let hashedPassword = await bcrypt.hash(password + "pepper", 10);
            const newUsers = await database_1.default.query("INSERT INTO users (username, password, email, firstname, lastname) VALUES ('" + username + "','" + hashedPassword + "','" + email + "','" + firstname + "','" + lastname + "')");
            createdUserInforObj = newUsers;
            console.log(newUsers);
            if (newUsers.rowCount == 0) {
                return {
                    "status": "Failure",
                    "message": "Record failed to be created"
                };
            }
            else {
                return {
                    "status": "Successful",
                    "message": "Record successfully created"
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
    async updateUserInfo(userName, userEmail) {
        try {
            await database_1.default.connect();
            const updatedData = await database_1.default.query("UPDATE users SET email = '" + userEmail + "' WHERE username = '" + userName + "'");
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
    async deleteUser(username) {
        try {
            await database_1.default.connect();
            const deletedUser = await database_1.default.query("DELETE FROM users WHERE username ='" + username + "'");
            deletedUserObj = deletedUser;
            console.log(deletedUserObj);
            if (deletedUser.rowCount == 0) {
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
exports.UserModels = UserModels;
