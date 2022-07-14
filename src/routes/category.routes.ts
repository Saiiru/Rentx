import { Router } from "express";
import { listCategoriesController } from "../modules/vehicles/useCases/listCategories";
import { createCategoryController } from "../modules/vehicles/useCases/createCategory/";
import multer from "multer";



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
const {file } = req;
  console.log(file)
  return res.send()
 
});

export { categoriesRoutes };
