import { CanActivate, Injectable, ExecutionContext} from "@nestjs/common"
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private readonly authservice: AuthService){}

    canActivate(context: ExecutionContext){

        const request = context.switchToHttp().getRequest();
        const authorization = request.headers

        try{
            const data =  this.authservice.checkToken((authorization ?? '').split(' ')[1])

            request.tokenPayload = data

            return true
        }catch(e){
            return false
        }
    }
}
