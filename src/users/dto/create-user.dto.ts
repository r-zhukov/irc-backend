import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Email address' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Incorrect email address' })
  readonly email: string;

  @ApiProperty({ example: '123qwerty', description: 'User password' })
  @IsString({ message: 'Should be a string' })
  @Length(6, 14, { message: 'Password must be at least 6 and no more than 14 characters' })
  readonly password: string;
}