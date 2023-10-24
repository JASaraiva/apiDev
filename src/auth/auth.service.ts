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
        const user = this.prisma.users.findFirst({
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

    async forget(){

    }

    async reset(){

    }
}