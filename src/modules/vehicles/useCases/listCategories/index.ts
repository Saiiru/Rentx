import { CategoriesRepositories } from "modules/vehicles/repositories/CategoriesRepositories";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCases } from "./ListCategoriesUseCases";


const categoriesRepositories = new CategoriesRepositories()
const listCategoriesUseCase = new ListCategoriesUseCases(categoriesRepositories)
export const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)
