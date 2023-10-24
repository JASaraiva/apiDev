import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserService } from "src/user/user.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module(
{
    imports : [
        JwtModule.register({
        secret: 'Gfy]t_!_Bou4V#C0BPBoAt.aQvtIBLj1'
        }),
        UserService,
        PrismaModule
    ],
    controllers: [AuthController],
    exports: []
})

export class AuthModule{

}