import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('patients')
class Patient{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @PrimaryGeneratedColumn()
    registry: number;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column('timestamp with time zone')
    dateBirth: Date;

    @Column()    
    phone: string;

    @Column()    
    status: number;

    @Column()
    address_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Patient;