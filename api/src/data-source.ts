import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'campaign_db',

  entities: ['src/**/*.entity.ts'], // 🔥 AUTO LOAD
  migrations: ['src/migrations/*.ts'],
});
