import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')

  async signup(@Body() createUserDto: CreateUserDto):Promise<User> {
    return await this.userService.signup(createUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id:string){
    return await this.userService.deleleById(id)
  }

}
