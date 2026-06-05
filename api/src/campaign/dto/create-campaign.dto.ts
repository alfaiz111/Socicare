import { IsString, IsNotEmpty, IsNumber, IsUrl, IsOptional } from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  title: string | undefined;

  @IsString()
  @IsNotEmpty()
  description: string | undefined;

  @IsNumber()
  targetAmount: number | undefined;

  @IsUrl()import: any { IsString, IsNotEmpty, IsNumber, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  title: string | undefined;

  @IsString()
  @IsNotEmpty()
  description: string | undefined;

  // 🔥 penting biar string → number
  @Type(() => Number)
  @IsNumber()
  targetAmount: number | undefined;

  @IsUrl()
  imageUrl: string;
}
  imageUrl: string;

  @IsOptional()
  isActive?: boolean;
}