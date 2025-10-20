import express from 'express'
import { userController } from '../controllers/userController.js';

const router = express.Router();

//Rutas para el usuario
router.get('/',userController.createUser);
router.get('/',userController.getUser);

export default router;