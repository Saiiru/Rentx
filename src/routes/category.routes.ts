import { Router } from "express";
import { listCategoriesController } from "../modules/vehicles/useCases/listCategories";
import { createCategoryController } from "../modules/vehicles/useCases/createCategory/";
import multer from "multer";
import { importCategoryController } from "../modules/vehicles/useCases/importCategory";



const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp"
})

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res)
 
});

categoriesRoutes.get("/", (req, res) => {
 return listCategoriesController.handle(req, res)
});

categoriesRoutes.post("/import", upload.single("file") ,(req, res) => {
  return importCategoryController.handle(
    req,res
  )
});

export { categoriesRoutes };
