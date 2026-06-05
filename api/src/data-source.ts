import { DataSource } from 'typeorm';
import { Campaign } from './campaign/campaign.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'campaign_db',

  entities: [Campaign],
  migrations: ['src/migrations/*.ts'],
});
