import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from "./db/connect";
import logger from "./helpers/logger";
import config from './config/config';
import {userRoute,productRoute,orderRoute} from './routes/index'

dotenv.config();

connectDB()

const app = express();
logger(app)
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
})

app.listen(config.PORT, () => { console.log(`Server started at http://localhost:${config.PORT}`) });
