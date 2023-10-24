import { IsJWT, IsStrongPassword } from "class-validator";

export class AuthResetDto{
    
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 0,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 1
    })
    password: string

    @IsJWT()
    token: string
}