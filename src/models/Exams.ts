import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('exams')
class Exams{
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

export default Exams;