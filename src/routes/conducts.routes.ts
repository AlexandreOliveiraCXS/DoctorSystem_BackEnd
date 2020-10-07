import { Router, request, response } from "express";
import CreateConductService from "../services/CreateConductService";

const conductsRouter = Router();

conductsRouter.post("/:id", async (request, response) => {
  const { description } = request.body;
  const { id: patient_id } = request.params;

  const conductService = new CreateConductService();
  const conduct = await conductService.execute({ description, patient_id });

  return response.json(conduct);
});
export default conductsRouter;
