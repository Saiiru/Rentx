import { Router } from "express";
import { listCategoriesController } from "../modules/vehicles/useCases/listCategories";
import { createCategoryController } from "../modules/vehicles/useCases/createCategory/";



const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res)
 
});

categoriesRoutes.get("/", (req, res) => {
 return listCategoriesController.handle(req, res)
});

export { categoriesRoutes };
