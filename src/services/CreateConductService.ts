import Conducts from "../models/Conducts";
import { getRepository } from "typeorm";

interface Request {
  description: string;
  patient_id: string;
}

class CreateConductService {
  public async execute({
    description,
    patient_id,
  }: Request): Promise<Conducts> {
    const conductsRepository = getRepository(Conducts);

    const conduct = conductsRepository.create({
      description,
      patient_id,
    });

    await conductsRepository.save(conduct);
    return conduct;
  }
}

export default CreateConductService;
