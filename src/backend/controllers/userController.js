//Traer el servicio
import { userServices } from "../services/userServices.js"

export const userController = {
    async getUser(res){
        try{
            const users = await servicio.getAllUsers();
            res.status(200).json({
                success: true,
                data:users
            })
        }catch(error){
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },

    async createUser (req, res){
        try{
            const {email, name} = req.body;
            //validacion basica
            if(!email || !name){
                return res.status(400).json({
                    success: false,
                    message:'Email y nombre son obligatorios'
                });
            }

            const newUser = await userServices.createUser({email, name});
            res.status(201).json({
                success: true,
                data: newUser,
                message: 'Usuario creado correctamente'
            });
        }catch(error){
            res.status(500).json({
                success: false,
                message:error.message
            });
        }
    }
}