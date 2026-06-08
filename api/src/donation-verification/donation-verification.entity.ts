import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  campaign!: string;

  @Column()
  category!: string;

  @Column('decimal')
  target!: number;

  @Column('decimal', { default: 0 })
  collected!: number;

  @Column({ default: 0 })
  progress!: number;
}
