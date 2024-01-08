"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = __importDefault(require("./handers/users"));
const products_1 = __importDefault(require("./handers/products"));
const orders_1 = __importDefault(require("./handers/orders"));
const orders_products_1 = __importDefault(require("./handers/orders_products"));
const cors = require('cors');
const dashboard_1 = __importDefault(require("./handers/dashboard"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const address = "0.0.0.0:3000";
const port = 3000;
app.use(cors());
// const oneDay = 1000 * 60 * 60 * 24;
// const corsOptions = {
//     origin: "https://localhost",
//     optionsSuccessStatus: 200
// }
// app.use(bodyParser.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
(0, users_1.default)(app);
(0, orders_1.default)(app);
(0, products_1.default)(app);
(0, orders_products_1.default)(app);
(0, dashboard_1.default)(app);
app.listen(Number(process.env.PORT) || port, function () {
    console.log(`starting app on: ${process.env.POSTGRES_HOST}:${process.env.PORT}`);
});
exports.default = app;
