import express from 'express'
import { userController } from '../controllers/userController.js';

const router = express.Router();

/** 
 * @swagger
 * components:
 *  schemas:
 *    User:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *            example: 1
 *          email:
 *            type: string
 *            example: linoling@gmail.com
 *          name:
 *            type: string
 *            example: lino
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Obtener todos los usuarios
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: OK
 */

router.get('/',userController.getUser);

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Crear nuevo usuario
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: lino@gmail.com
 *              name:
 *                type: string
 *                example: lino
 *    responses:
 *      201:
 *        description: Usuario creado correctamente
 *        content:
 *          application/json:
 *            $ref: '#/components/schemas/User'
 *      400:
 *        description: Datos invalidos
 *      500:
 *        description: Error del servidor
 */

router.post('/',userController.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    summary: Actualizar usuario
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: id del usuario a actualizar
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: ling@gmail.com
 *              name:
 *                type: string
 *                example: ling
 *    responses:
 *      201:
 *        description: Actualizado correctamente
 *        content:
 *          application/json:
 *            $ref: '#/components/schemas/User'
 *      400:
 *        description: Datos invalidos
 *      500:
 *        description: Error del servidor
*/

router.put('/:id', userController.updateUser);

/**
 * @swegger
 * /api/users/{id}:
 *  delete:
 *    summary: Eliminar un usuario por ID
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: ID del usuario a eliminar
 *    responses:
 *      201:
 *        description: Actualizado correctamente
 *      400:
 *        description: Datos invalidos
 *      500:
 *        description: Error del servidor
 */

//Metodo para eliminar DELETE
//Metodo para modificar PATCH

export default router;