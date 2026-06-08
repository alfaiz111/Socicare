import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignModule } from './campaign/campaign.module';
import { ReportModule } from './report/report.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    // ✅ CONFIG DATABASE
    TypeOrmModule.forRoot({
      type: 'mysql', // ganti 'postgres' kalau pakai postgres
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // isi sesuai DB kamu
      database: 'campaign_db',

      autoLoadEntities: true, // auto detect entity
      synchronize: true, // ⚠️ hanya untuk development
    }),

    // ✅ MODULE
    CampaignModule,

    ReportModule,
  ],
})
export class AppModule {}
