import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  title: string | undefined;

  @Column('text')
  description: string | undefined;

  @Column('float')
  targetAmount: number | undefined;

  @Column({ default: 0 })
  currentAmount: number | undefined;

  @Column()
  imageUrl: string | undefined;

  @Column({ default: true })
  isActive: boolean | undefined;

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;
}
