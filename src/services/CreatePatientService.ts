import Patient from "../models/Patient";
import PatientsRepository from "../repositories/PatientsRepository";
import { getCustomRepository } from "typeorm";

interface Request {
  name: string;
  cpf: string;
  dateBirth: string;
  phone: string;
  address_id: string;
}

class CreatePatientService {
  public async execute({
    name,
    cpf,
    dateBirth,
    phone,
    address_id,
  }: Request): Promise<Patient> {
    const patientsRepository = getCustomRepository(PatientsRepository);
    const status = 1;
    const patient = patientsRepository.create({
      name,
      cpf,
      dateBirth,
      phone,
      status,
      address_id,
    });

    await patientsRepository.save(patient);
    return patient;
  }
}

export default CreatePatientService;
