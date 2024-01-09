import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";
import { websiteRegex } from "../utils/patterns";

export class BootCampDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string

  @IsNotEmpty()
  @MaxLength(500)
  description: string

  @IsNotEmpty()
  @Matches(websiteRegex)
  website: string

  @IsNotEmpty()
  @MaxLength(20)
  phone: string

  @IsNotEmpty()
  @IsEmail()
  email: string

}