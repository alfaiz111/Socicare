import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Disaster {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  nama_bencana: string | undefined;

  @Column()
  lokasi: string | undefined;

  @Column('date')
  tanggal: Date | undefined;

  @Column()
  status: string | undefined;
}
