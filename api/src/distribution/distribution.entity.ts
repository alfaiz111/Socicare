import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Campaign } from '../campaign/campaign.entity';

@Entity()
export class Distribution {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Campaign)
  campaign: Campaign;

  @Column()
  penerima: string;

  @Column('decimal')
  nominal: number;

  @Column('date')
  tanggal: Date;

  @Column()
  status: string;
}