import { Router } from "express";
import CreatePatientService from "../services/CreatePatientService";
import CreateAddressService from "../services/CreateAddressService";
import { getCustomRepository, getRepository } from "typeorm";
import PatientsRepository from "../repositories/PatientsRepository";

const patientsRouter = Router();

patientsRouter.post("/", async (request, response) => {
  const { name, cpf, dateBirth, phone, address } = request.body;
  console.log(new Date(dateBirth).toLocaleDateString("bt-BR"))
  // _________________Criando Endereço________________

  const createAddress = new CreateAddressService();

  const addressResult = await createAddress.execute(address);

  // _________________FIM Criando Endereço________________
  const createPatient = new CreatePatientService();

  const address_id = addressResult.id;
  const patient = await createPatient.execute({
    name,
    cpf,
    dateBirth: new Date(dateBirth).toISOString(),
    phone,
    address_id,
  });

  return response.json(patient);
});

patientsRouter.get("/", async (request, response) => {
  const patientRepository = getCustomRepository(PatientsRepository);

  const patients = await patientRepository.findAll();
  return response.json(patients);
});

patientsRouter.get("/:id", async (request, response) => {
  const { id } = request.params;
  const patientRepository = getCustomRepository(PatientsRepository);

  const patient = await patientRepository.findOneLastAppointment(id);
  return response.json(patient[0]);
});
export default patientsRouter;
