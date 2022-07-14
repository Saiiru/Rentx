import { Category } from "../../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesRepositories implements ICategoriesRepository {
  private categories: Category[] = [];

  private static INSTANCE: CategoriesRepositories

 private constructor() {
    this.categories = [];
  }

public static getInstance(): CategoriesRepositories {
    if(!CategoriesRepositories.INSTANCE){
      CategoriesRepositories.INSTANCE  = new CategoriesRepositories()
    }

    return CategoriesRepositories.INSTANCE
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);

    return category;
  }
}
