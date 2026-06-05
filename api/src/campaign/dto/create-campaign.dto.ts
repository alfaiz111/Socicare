import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUrl,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  title: string | undefined;

  @IsString()
  @IsNotEmpty()
  description: string | undefined;

  @Type(() => Number)
  @IsNumber()
  targetAmount: number | undefined;

  @IsUrl()
  imageUrl: string | undefined;

  @IsOptional()
  isActive?: boolean;
}
