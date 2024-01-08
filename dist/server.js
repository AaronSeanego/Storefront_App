"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var users_1 = __importDefault(require("./handers/users"));
var products_1 = __importDefault(require("./handers/products"));
var orders_1 = __importDefault(require("./handers/orders"));
var orders_products_1 = __importDefault(require("./handers/orders_products"));
var cors = require('cors');
var dashboard_1 = __importDefault(require("./handers/dashboard"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var address = "0.0.0.0:3000";
var port = 3000;
app.use(cors());
// const oneDay = 1000 * 60 * 60 * 24;
// const corsOptions = {
//     origin: "https://localhost",
//     optionsSuccessStatus: 200
// }
// app.use(bodyParser.json());
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: true }));
(0, users_1["default"])(app);
(0, orders_1["default"])(app);
(0, products_1["default"])(app);
(0, orders_products_1["default"])(app);
(0, dashboard_1["default"])(app);
app.listen(Number(process.env.PORT) || port, function () {
    console.log("starting app on: ".concat(process.env.POSTGRES_HOST, ":").concat(process.env.PORT));
});
exports["default"] = app;
