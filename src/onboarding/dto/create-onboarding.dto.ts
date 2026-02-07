import { Type } from "class-transformer";
import { IsString, IsNotEmpty, IsEmail, IsNumber, Min } from "class-validator";

export class CreateOnboardingDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  documento: string;

  @IsEmail()
  email: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  montoInicial: number;

}