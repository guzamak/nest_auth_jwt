import { Body, Controller, Post,Get, UseGuards, Req } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local/local.guard';

@Controller('auth')
export class AuthController {
    constructor(private authservice:AuthService) {}

}
