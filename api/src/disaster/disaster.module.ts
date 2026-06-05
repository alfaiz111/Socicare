import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './campaign.entity';
import { CampaignService } from './disaster.service';
import { CampaignController } from './disaster.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign])],
  providers: [CampaignService],
  controllers: [CampaignController],
})
export class CampaignModule {}
