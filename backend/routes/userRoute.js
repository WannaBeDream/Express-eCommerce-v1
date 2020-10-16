import express from 'express';
import userController from "./../controllers/userController"
import { isAdmin, isAuth } from '../middlewares/util';


const router = express.Router();

router.put('/:id', isAuth, userController.updateUser);
router.post('/signin', userController.signIn)
router.post('/register', userController.createUser)
router.get("/createadmin", userController.createAdmin); // TO DO
router.delete("/:id", isAuth, isAdmin, userController.deleteUser);

export default router; 
