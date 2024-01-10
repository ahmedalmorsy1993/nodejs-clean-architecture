import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Matches, Max, MaxLength, Min } from "class-validator";
import { websiteRegex } from "../utils/patterns";
import { TCareer } from "../entities/BootCamp";


export const careersEnum = ['web development', 'mobile development', 'ui/ux', 'data science', 'business', 'other']
export class BootCampDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string

  @IsNotEmpty()
  @MaxLength(500)
  description: string

  @IsNotEmpty()
  @Matches(websiteRegex, { message: 'Invalid Url' })
  website: string

  @IsNotEmpty()
  @MaxLength(20)
  phone: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  address: string

  @IsNotEmpty()
  @IsEnum(careersEnum, {
    each: true, message: (props) => {
      const validValues = careersEnum.join(', ');
      return `each value in careers must be one of the following values: ${validValues}`;
    },
  }) // Ensure each value in the array matches the enum type
  careers: TCareer[];

  @IsNotEmpty()
  @Min(1)
  @Max(10)
  averageRating: number



  @IsNotEmpty()
  averageCost: number
  @IsNotEmpty()
  location: string

  @IsOptional()
  photo: string

  @IsNotEmpty()
  housing: boolean
  @IsNotEmpty()
  jobAssistance: boolean
  @IsNotEmpty()
  jobGuarantee: boolean
  @IsNotEmpty()
  acceptGi: boolean


}


export class UpdateBootcampDto implements Partial<BootCampDto> { }
