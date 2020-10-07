import Anamnesis from "../models/Anamnesis";
import { getRepository } from "typeorm";

interface Request {
  description: string;
  patient_id: string;
}

class CreateAnamnesisService {
  public async execute({
    description,
    patient_id,
  }: Request): Promise<Anamnesis> {
    const anamnesisRepository = getRepository(Anamnesis);

    const anamnesis = anamnesisRepository.create({
      description,
      patient_id,
    });

    await anamnesisRepository.save(anamnesis);
    return anamnesis;
  }
}

export default CreateAnamnesisService;
