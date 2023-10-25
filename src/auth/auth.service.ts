import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { users } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthRegisterDto } from "./dto/auth-register.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService{

    constructor(
        private readonly jwtService: JwtService,
        private readonly prisma: PrismaService,
        private readonly userService: UserService){}

    async createToken(user: users){
        return  { AccessToken: this.jwtService.sign({
                id: user.id,
                name: user.name,
                email: user.email
            }, {
                expiresIn: "1 hour",
                subject: String(user.id),
                issuer: 'login',
                audience: 'users'
            })
        }
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

        return this.createToken(user);
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

        const user = await this.prisma.users.update({
            where: {
                id
            },
            data: {
                password
            }
        })

        return this.createToken(user);
    }

    async register(data: AuthRegisterDto){

        const user = await this.userService.create(data)
    }
}