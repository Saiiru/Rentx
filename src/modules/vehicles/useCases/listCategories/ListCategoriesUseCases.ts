import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoriesUseCases {
  constructor(private categoriesRepository: ICategoriesRepository){}

  execute(): Category[]{
      const categories = this.categoriesRepository.list()

      return categories
  }
}
