import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [UserModule, AuthModule,  TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Serect',
      database: 'auth',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,//false when use 
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
