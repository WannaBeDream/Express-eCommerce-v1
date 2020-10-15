import express from 'express';
import productController from "./../controllers/productController";
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProduct);
router.put("/:id", isAuth, isAdmin, productController.updateProduct);
router.delete("/:id", isAuth, isAdmin, productController.deleteProduct);
router.post("/", isAuth, isAdmin, productController.createProduct)


export default router; 