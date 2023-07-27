import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local/local.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService: AuthService) {}


  @UseGuards(LocalAuthGuard)//รับค่าผ่าน body 
  @Post('login')
  async signin(@Request () req:any){
      return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getHello(@Request() req:any): string {
    return req.user
  }
  
}
