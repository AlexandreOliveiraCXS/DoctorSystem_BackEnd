import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import Patient from "./Patient";

@Entity("patients_adjuncts")
class PatientAdjuncts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column()
  patients_id: string;

  @ManyToOne(()=> Patient )
  @JoinColumn({ name: "patients_id" })
  patient: Patient;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default PatientAdjuncts;
