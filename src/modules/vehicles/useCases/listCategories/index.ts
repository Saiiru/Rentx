import { CategoriesRepositories } from "../../repositories/implementations/CategoriesRepositories";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCases } from "./ListCategoriesUseCases";


const categoriesRepositories = CategoriesRepositories.getInstance()
const listCategoriesUseCase = new ListCategoriesUseCases(categoriesRepositories)
export const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)
