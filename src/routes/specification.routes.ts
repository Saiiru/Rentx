import { Router } from "express";
import { SpecificationsRepository } from "../modules/vehicles/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/vehicles/services/CreateSpecification";

const specificationRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationRepository,
  );

  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});

export { specificationRoutes };
