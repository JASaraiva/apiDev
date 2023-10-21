import { Body, Controller, Post } from "@nestjs/common";

@Controller('users')

export class UserContoller{

    @Post()
    async create(@Body() body){

        return {body};
    }
}