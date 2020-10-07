import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('address')
class Address{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    cep: string;    
       
    @Column()    
    country: string;
    
    @Column()
    neighborhood: string;
    
    @Column()
    city: string;
    
    @Column()
    street: string;
    
    @Column()
    number: number;

    @Column()
    complement: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Address;