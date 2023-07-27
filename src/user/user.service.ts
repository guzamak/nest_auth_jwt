import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private UserRepo:Repository<User>,){}//ตั้งค่า UesrRepo เพื่อให้สามารถเรียกใช้ ผ่าน this โดย costrutor function 

  async signup(createUserDto:CreateUserDto){
   try{
    const {name , password } = createUserDto //สกัด
    
    const hashPassword = await bcrypt.hashSync(password, 10 ); // hashPassword ด้วย bcrypt

    const user = this.UserRepo.create(
      {
        name:name,
        password:hashPassword
      })

    return await this.UserRepo.save(user);
  }
  catch(error){
    throw new ConflictException("This username has use");
  }
  }

  async findone (name:string): Promise<User|undefined>{
    return await this.UserRepo.findOne({ where: { name } })//name ใน colunm = name
  }

  async deleleById (id){
    const user = await this.UserRepo.findOneBy({id:id})//หาจากid
    return await this.UserRepo.remove(user)// ลบค่าที่เหมือน user
  }
}
