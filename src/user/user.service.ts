import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";

@Injectable()
export class UserService{

    constructor(private readonly prisma: PrismaService){}
    
    async create(data: CreateUserDTO){
        return this.prisma.users.create({
            data,
            //e possivel recuperar os dados do registro inserido
            // select:{
            //     id: true,
            //     name:true,
            //     email: true
            // }
        })
    }

    async list(){
        return this.prisma.users.findMany()
    }

    async show(id: number) {
        return this.prisma.users.findUnique({
            where: {id},
        })
    }

    async update(id: number, data: UpdatePutUserDTO){
        return this.prisma.users.updateMany({
            where:{
                id
            },
            data
        })
            
    }

    async updatePartial(id: number, data: UpdatePatchUserDTO){
        return this.prisma.users.updateMany({
            where:{
                id
            },
            data
        })
    }


    async delete(id: number){
        return this.prisma.users.delete({
            where:{
                id
            },
        })
    }
}