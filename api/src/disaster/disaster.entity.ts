import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Disaster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama_bencana: string;

  @Column()
  lokasi: string;

  @Column('date')
  tanggal: Date;

  @Column()
  status: string;
}