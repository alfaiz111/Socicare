import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// Entity import adjusted to match actual entity filename/location
import { Campaign } from './campaign.entity';
import { CampaignService } from './donor.service';
import { CampaignController } from './donor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign])],
  providers: [CampaignService],
  controllers: [CampaignController],
})
export class DonorModule {}
