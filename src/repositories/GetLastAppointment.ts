import Anamnesis from "../models/Anamnesis";
import Conducts from "../models/Conducts";
import Exams from "../models/Exams";
import Ratings from "../models/Ratings";
import Recipes from "../models/Recipes";
import { getRepository } from "typeorm";

interface Result {
  time: number;
  date: string;
}

export const getLastAppointment = async (id: string): Promise<String> => {
  const conductsRepository = getRepository(Conducts);
  const anamnesisRepository = getRepository(Anamnesis);
  const examsRepository = getRepository(Exams);
  const ratingsRepository = getRepository(Ratings);
  const recipesRepository = getRepository(Recipes);

  const allDate = <Result[]>[];

  const dataConducts = await conductsRepository
    .createQueryBuilder("conducts")
    .select("MAX(updated_at)", "date")
    .where("patient_id = :id", { id })
    .getRawOne();

  if (dataConducts) {
    allDate.push({
      time: new Date(dataConducts.date).getTime(),
      date: new Date(dataConducts.date).toLocaleDateString("pt-BR"),
    });
  }

  const anamnesisDate = await anamnesisRepository
    .createQueryBuilder("anamnesis")
    .select("MAX(updated_at)", "date")
    .where("patient_id = :id", { id })
    .getRawOne();

  if (anamnesisDate) {
    allDate.push({
      time: new Date(anamnesisDate.date).getTime(),
      date: new Date(anamnesisDate.date).toLocaleDateString("pt-BR"),
    });
  }

  const examsDate = await examsRepository
    .createQueryBuilder("exams")
    .select("MAX(updated_at)", "date")
    .where("patient_id = :id", { id })
    .getRawOne();

  if (examsDate) {
    allDate.push({
      time: new Date(examsDate.date).getTime(),
      date: new Date(examsDate.date).toLocaleDateString("pt-BR"),
    });
  }

  const ratingsDate = await ratingsRepository
    .createQueryBuilder("ratings")
    .select("MAX(updated_at)", "date")
    .where("patient_id = :id", { id })
    .getRawOne();

  if (ratingsDate) {
    allDate.push({
      time: new Date(ratingsDate.date).getTime(),
      date: new Date(ratingsDate.date).toLocaleDateString("pt-BR"),
    });
  }

  const recipesDate = await recipesRepository
    .createQueryBuilder("recipes")
    .select("MAX(updated_at)", "date")
    .where("patient_id = :id", { id })
    .getRawOne();
    
  if (recipesDate) {
    allDate.push({
      time: new Date(recipesDate.date).getTime(),
      date: new Date(recipesDate.date).toLocaleDateString("pt-BR"),
    });
  }

  const result = allDate.sort((a, b) => {
    if (b.time > a.time) return 1;

    return -1;
  });

  return result[0].date;
};
