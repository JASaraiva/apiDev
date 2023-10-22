import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";

@Controller('users')

export class UserContoller{

    constructor(private readonly userService: UserService){}

    @Post()
    async create(@Body() data: CreateUserDTO){
        return this.userService.create(data);
    }

    @Get()
    async list(){
        return {users: []};
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number){
        return {
                user: [], 
                id
            };
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() { name, email, password } : UpdatePutUserDTO){
        return {
                method: 'PUT',
                name, 
                email, 
                password,
                id
            };
            
    }

    @Patch(':id')
    async updatePartial(@Param('id', ParseIntPipe) id: number, @Body() { name, email, password } : UpdatePatchUserDTO){
        return {
                method: 'PUT',
                name, 
                email, 
                password,
                id
            };
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return {
                id
            };
    }
}