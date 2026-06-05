import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  campaign: string;

  @IsString()
  category: string;

  @IsNumber()
  @Min(1)
  target: number;

  @IsOptional()
  @IsNumber()
  collected?: number;

  @IsOptional()
  @IsNumber()
  progress?: number;
}