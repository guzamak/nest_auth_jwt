
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authservice: AuthService) {
        super();
    }

    async validate (username:string,password:string): Promise<any> {
        const user = await this.authservice.validateUser(username,password);
        if (user) {
            return user;
        }
        else if (!user){
            throw new UnauthorizedException();//ต้อง signin
        }
    }   

}