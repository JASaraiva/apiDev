import { IsString, IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 0,
    minUppercase: 1,
    minNumbers: 0,
    minSymbols: 1,
  })
  password: string;
}
