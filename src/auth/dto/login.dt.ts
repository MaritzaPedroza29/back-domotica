import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class LoginDto {
    @IsEmail()
    email: string;

    @Transform(({value}) => value.trim())
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}