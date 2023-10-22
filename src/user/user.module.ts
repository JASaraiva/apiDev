import { Module } from "@nestjs/common";
import { UserContoller } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [UserContoller],
    providers: [UserService],
    exports: []
})

export class UserModule{}