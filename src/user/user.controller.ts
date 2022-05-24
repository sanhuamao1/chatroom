import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {UserService} from './user.service'

@Controller('user')  //给nest创建路由用的
export class UserController {
    constructor(private readonly userService:UserService){}

    @Get()
    findAll(@Query() paginationQuery){
        const {limit,offset}=paginationQuery
        return this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        return this.userService.findOne(id)
    }

    @Post()
    create(@Body() createUserDto:CreateUserDto){
        return this.userService.create(createUserDto)
    }

    @Patch(':id')
    update(@Param('id') id:number,@Body() updateUserDto:UpdateUserDto){
        return this.userService.update(id,updateUserDto)
    }

    @Delete(':id')
    remove(@Param('id') id:number){
        return this.userService.remove(id)
    }

    @Get('friends')
    findFriends():string{
        return '返回所有好友'
    }
}
