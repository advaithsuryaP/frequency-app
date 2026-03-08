import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'waves' })
export class WaveEntity {
    @PrimaryColumn('uuid')
    id!: string;

    @Column({ nullable: false })
    content!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
