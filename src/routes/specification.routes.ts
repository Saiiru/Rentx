import { Router } from "express";
import { createSpecificationController } from "../modules/vehicles/useCases/CreateSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req,res)

});

export { specificationRoutes };
