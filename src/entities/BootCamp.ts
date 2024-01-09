import { IsEmail, Matches, Max, Min } from "class-validator";
import { Column, CreateDateColumn } from "typeorm";
import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";
import { websiteRegex } from "../utils/patterns";
import { careersEnum } from "../dto/bootcamp.dto";

export type TCareer = 'web development' | 'mobile development' | 'ui/ux' | 'science' | 'business' | 'other'

@Entity()
export class BootCamp extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true, length: 50 })
  name: string

  @Column({ nullable: true })
  slug: string;

  @Column({ length: 500 })
  description: string

  @Column()
  @Matches(websiteRegex)
  website: string

  @Column({ length: 20 })
  phone: string

  @Column()
  @IsEmail()
  email: string

  @Column()
  address: string

  @Column()
  location: string;

  @Column({
    type: 'enum',
    enum: careersEnum,
    array: true,
    default: [],
  })
  careers: TCareer[]

  @Column({ type: 'int' })
  @Min(1)
  @Max(10)
  averageRating: number

  @Column()
  averageCost: number

  @Column({ default: 'no-photo.jpg' })
  photo: string

  @Column()
  housing: boolean
  @Column()
  jobAssistance: boolean
  @Column()
  jobGuarantee: boolean
  @Column()
  acceptGi: boolean
  @CreateDateColumn()
  createdAt: Date
} 