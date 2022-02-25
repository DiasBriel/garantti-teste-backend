import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UserSchema {
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  role: string;
}
