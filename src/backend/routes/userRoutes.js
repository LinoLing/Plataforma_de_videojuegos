import express from 'express'
import { userController } from '../controllers/userController.js';

const router = express.Router();

//Rutas para el usuario
router.get('/',userController.getUser);
router.post('/',userController.createUser);
router.put('/:id', userController.updateUser);

//Metodo para eliminar DELETE
//Metodo para modificar PATCH

export default router;