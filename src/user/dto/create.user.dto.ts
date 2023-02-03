import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({
    example: 'Anna',
    required: false
  })
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty({
    example: 'Cool',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  @Length(2)
  surName: string;

  @ApiProperty({
    example: 'ana@mail.com',
    required: true
  })
  @IsString()
  @IsEmail()
  email:string;

  @ApiProperty({
    example: '18',
    required: true
  })
  @IsNumber()
  @Min(16)
  age: number;

  @ApiProperty({
    example: 'Lviv',
    required: false
  })
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty({
    example: true,
    required: false
  })
  @IsBoolean()
  @IsOptional()
  isConfirm: boolean;

  @ApiProperty({
    example: 'PassworD1234',
    required: true
  })
  @IsString()
  password: string;
}

export class UpdateUserDto {

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(2)
  surName: string;

  @IsString()
  @IsEmail()
  email:string;

  @IsNumber()
  @Min(16)
  age: number;

  @IsString()
  @IsOptional()
  city: string;


  @IsBoolean()
  @IsOptional()
  isConfirm: boolean;

  @IsString()
  password: string;
}