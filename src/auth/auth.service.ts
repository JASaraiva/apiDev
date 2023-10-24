import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService{

    constructor(
        private readonly jwtService: JwtService,
        private readonly prisma: PrismaService){}

    async createToken(){

    }

    async checkToken(){
        
    }

    async login(email: string, password: string){
        const user = await this.prisma.users.findFirst({
            where: {
                email,
                password
            }
        })

        if(!user){
            throw new UnauthorizedException("E-mail e/ou senha inválidos.");
        }

        return user;
    }

    async forget(email: string){

        const user = await this.prisma.users.findFirst({
            where: {
                email
            }
        })

        if(!user){
            throw new UnauthorizedException("E-mail incorreto");
        }

        return true;
    }

    async reset(password: string, token: string){

        const id = 0 //id extraido do token

        await this.prisma.users.update({
            where: {
                id
            },
            data: {
                password
            }
        })
    }
}