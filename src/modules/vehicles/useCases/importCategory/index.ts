import { CategoriesRepositories } from "../../repositories/implementations/CategoriesRepositories";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepositories = CategoriesRepositories.getInstance()
const importCategoryUseCase  = new  ImportCategoryUseCase(categoriesRepositories)
export const importCategoryController = new ImportCategoryController(importCategoryUseCase);
