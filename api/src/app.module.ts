import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Campaign } from './campaign/campaign.entity';
import { Disaster } from './disaster/disaster.entity';
import { Donor } from './donor/donor.entity';
import { DonationVerification } from './donation-verification/donation-verification.entity';
import { Distribution } from './distribution/distribution.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'donasi_app',
      entities: [Campaign, Disaster, Donor, DonationVerification, Distribution],
      synchronize: true, // DEV ONLY
    }),
  ],
})
export class AppModule {}

import { CampaignModule } from './campaign/campaign.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({...}),
    CampaignModule,
  ],
})