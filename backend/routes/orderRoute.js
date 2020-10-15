import express from 'express';
import orderController from './../controllers/orderController';
import { isAuth, isAdmin } from '../middlewares/util';

const router = express.Router();

router.get("/", isAuth, orderController.getOrdersByPopulate);
router.get("/mine", isAuth, orderController.getMineOrders)
router.get("/:id", isAuth, orderController.getOrder);
router.post("/", isAuth, orderController.createOrder);
router.put("/:id/pay", isAuth, orderController.payOrder);
router.delete("/:id", isAuth, isAdmin, orderController.deleteOrder);

export default router; 