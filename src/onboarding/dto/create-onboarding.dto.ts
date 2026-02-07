import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional } from "class-validator";

export class CreateOnboardingDto {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  contactName: string;

  @IsEmail()
  contactEmail: string;

  @IsString()
  @MinLength(7)
  contactPhone: string;

  @IsOptional()
  @IsString()
  notes?: string;
}