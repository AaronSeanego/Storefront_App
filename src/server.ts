import express, {Request,Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import users_func from './handers/users';
import productsRoutes from './handers/products';
import orderRoutes from './handers/orders';
import ordersProductsRoutes from './handers/orders_products';
const cors = require('cors');
import dashBoardRoutes from './handers/dashboard';

dotenv.config();

const app: express.Application = express();
const address: string = "0.0.0.0:3000";
const port:number = 3000;

app.use(cors());

/*"test": "SET ENV=test && npx tsc && db-migrate up && db-migrate --env test up && jasmine-ts && db-migrate db:drop storefront_app_test_db",*/
// const oneDay = 1000 * 60 * 60 * 24;

// const corsOptions = {
//     origin: "https://localhost",
//     optionsSuccessStatus: 200
// }

// app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

users_func(app);
orderRoutes(app);
productsRoutes(app);
ordersProductsRoutes(app);
dashBoardRoutes(app);

process.on('uncaughtException', function (err) {
    console.log(err);
});

app.listen(Number(process.env.PORT) || port, function () {
    console.log(`starting app on: ${process.env.POSTGRES_HOST}:${process.env.PORT}`);
})

export default app;