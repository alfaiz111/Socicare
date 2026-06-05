import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Donor {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  nama!: string;

  @Column()
  email!: string;

  @Column('decimal', { default: 0 })
  jumlah_donasi!: number;

  @Column('decimal', { default: 0 })
  total_donasi!: number;

  @Column()
  status!: string;
}
