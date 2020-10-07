import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('ratings')
class Ratings{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;     

    @Column()
    patient_id: string;  

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Ratings;