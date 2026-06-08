import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUrl,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @Type(() => Number)
  @IsNumber()
  targetAmount!: number;

  @IsUrl()
  imageUrl!: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
