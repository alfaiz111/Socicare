import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Campaign } from '../campaign/campaign.entity';
import { Donor } from '../donor/donor.entity';

@Entity()
export class DonationVerification {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Donor)
  donor: Donor;

  @ManyToOne(() => Campaign)
  campaign: Campaign;

  @Column('decimal')
  nominal: number;

  @Column('date')
  tanggal: Date;

  @Column()
  bukti: string;

  @Column()
  status: string;
}