import express from 'express';
import uploadController from "./../controllers/uploadController";
const router = express.Router();

router.post('/',uploadController.uploadImage, uploadController.getData);

export default router;