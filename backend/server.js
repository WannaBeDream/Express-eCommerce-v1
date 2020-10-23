// npm modules
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
// helpers
import logger from './helpers/logger';
import connectDB from './db/connect';
import swagger from './helpers/swagger';
// config
import config from './config/config';
// routes
import {userRoute,productRoute,orderRoute, uploadRoute} from './routes/index';

dotenv.config();

connectDB()

const app = express();
logger(app)  // TODO
swagger(app) // TODO
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use('/api/uploads', uploadRoute); // TODO
app.get("/api/config/paypal", (req, res) => {  // TODO
  res.send(config.PAYPAL_CLIENT_ID);
})


app.use('/uploads', express.static(path.join(__dirname, './../uploads')));


app.listen(config.PORT, () => { console.log(`Server started at http://localhost:${config.PORT}`) });
