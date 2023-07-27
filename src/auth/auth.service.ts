import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,private jwtService:JwtService){} //ต้องการใช้ method findone ของ userservice

    async validateUser(username:string, password:string): Promise<any>{// return async = promise
        const user  = await this.userService.findone(username);//ลองหา  name ใน db ก่อนไม่มีได้ null
        if (user && await bcrypt.compare(password, user.password)){//เปรียบเทียบ password ด้วย bcypt ถ้าตรงจะได้ ture
            const {password, ...result} = user;//return ทุกอย่างที่ไม่ใช่ password
            return result
        }
        else {
            return null;
        }
    }

    async login(user:any){
        const payload = {sub:user.id,name:user.name}
        return {acess_token:this.jwtService.sign(payload)}//sign payload
    }




}
