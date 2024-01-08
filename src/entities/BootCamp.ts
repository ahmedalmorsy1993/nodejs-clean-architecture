import { IsEmail, Matches, Max, Min } from "class-validator";
import { Column, CreateDateColumn } from "typeorm";
import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";
import { websiteRegex } from "../utils/patterns";

type TCareer = 'web development' | 'mobile development' | 'ui/ux' | 'science' | 'business' | 'other'

@Entity()
export class BootCamp extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true, length: 50 })
  name: string

  @Column()
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

  @Column({ type: 'enum', enum: ['web development', 'mobile development', 'ui/ux', 'data science', 'business', 'other'] })
  careers: TCareer

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