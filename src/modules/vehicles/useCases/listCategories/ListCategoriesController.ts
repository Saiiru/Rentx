import { Request, Response } from 'express'
import { ListCategoriesUseCases } from './ListCategoriesUseCases'

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCases) {}

  handle(req: Response, res: Response): Response {
    const all = this.listCategoriesUseCase.execute()

    return res.json(all)
  }
}
