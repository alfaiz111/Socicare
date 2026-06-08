import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './donation-verification.entity';
import { CampaignService } from './donation-verification.service';
import { CampaignController } from './donation-verification.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign])],
  providers: [CampaignService],
  controllers: [CampaignController],
})
export class CampaignModule {}
