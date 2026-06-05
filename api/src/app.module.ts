import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignModule } from './campaign/campaign.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // bisa diganti postgres
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'campaign_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CampaignModule,
  ],
})
export class AppModule {}