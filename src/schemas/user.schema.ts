import { IsEmail, IsString, MaxLength } from 'class-validator';

export class UserSchema {
  @IsString()
  @MaxLength(120)
  name: string;

  @IsString()
  @MaxLength(255)
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(8)
  password: string;
}
