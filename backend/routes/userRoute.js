import express from 'express';
import userController from "./../controllers/userController"
import { isAuth } from '../middlewares/util';


const router = express.Router();

router.put('/:id', isAuth, userController.updateUser);

router.post('/signin', userController.signIn)

router.post('/register', userController.createUser)

router.get("/createadmin", userController.createAdmin);

export default router; 
