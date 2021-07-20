import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@gmail.com',
    description: 'Email address',
    type: String,
  })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Should be an email' })
  readonly email: string;

  @ApiProperty({
    example: '123qwerty',
    description: 'User password',
    type: String,
    minLength: 6,
    maxLength: 14,
  })
  @IsString({ message: 'Should be a string' })
  @Length(6, 14, {
    message: 'Should be at least 6 and no more than 14 characters',
  })
  readonly password: string;
}
