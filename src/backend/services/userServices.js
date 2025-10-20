import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient;

export const userServices ={

    //crear usuarios
     async createUser(data){
        try{
            const{email, name} = data;
            return await prisma.user.create({
                data :{email, name}
            })
        }catch(error){
            throw error('Error al crear usuario' + error.message)
        }
    },

    //obtener mis usuarios
    async getUser(){
        try{
            return await prisma.user.findMany();
        }catch(error){
            throw error ('Error al obtener usuarios' + error.message);
        }
    }
}