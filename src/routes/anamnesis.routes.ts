import { Router, request, response } from "express";
import CreateAnamnesisService from "../services/CreateAnamnesisService";

const anamnesisRouter = Router();

anamnesisRouter.post("/", async (request, response) => {
  const { description, patient_id } = request.body;

  const anamnesisService = new CreateAnamnesisService();
  const anamnesis = await anamnesisService.execute({ description, patient_id });

  return response.json(anamnesis);
});
export default anamnesisRouter;
