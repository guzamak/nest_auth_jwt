import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [UserModule,
    JwtModule.register({
    secret: "ENV",
    signOptions: {expiresIn:'60s'}
  })],//usermodule เก็บ userservice ต้องเชื่อมกันก่อนถึงใช้ได้s
  providers: [AuthService,LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
