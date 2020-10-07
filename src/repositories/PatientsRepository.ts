import Patient from "../models/Patient";

import { EntityRepository, Repository, getRepository } from "typeorm";
import { getLastAppointment } from "./GetLastAppointment";
import PatientAdjuncts from "../models/PatientAdjuncts";
import patientsRouter from "../routes/patients.routes";

@EntityRepository(Patient)
class PatientsRepository extends Repository<Patient> {
  public async findAll(): Promise<Patient[]> {
    const patients = await this.find({ order: { registry: "ASC" } });

    const patientTreated = Promise.all(
      patients.map(async (patient: Patient) => ({
        ...patient,
        lastAppointment: await getLastAppointment(patient.id),
      }))
    );

    return patientTreated;
  }
  
  public async findOneLastAppointment(id: string): Promise<Patient[]>{
    const patient = await this.find({ where: {id} });

    const patientTreated = Promise.all(
      patient.map(async (patient: Patient) => ({
        ...patient,
        lastAppointment: await getLastAppointment(patient.id),
        adjuncts: await getAdjuncts(patient.id),
      }))
    );

    return patientTreated;
  }
}
const getAdjuncts = async (id: string): Promise<PatientAdjuncts> => {
  const conductsRepository = getRepository(PatientAdjuncts);

  const dataConducts = await conductsRepository
    .createQueryBuilder()
    .where("patients_id = :id", { id })
    .getRawOne();

  return dataConducts;
};

export default PatientsRepository;
