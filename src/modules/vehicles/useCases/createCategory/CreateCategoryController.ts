import {Request, Response} from "express"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";



export class CreateCategoryController {
constructor(private CreateCategoryUseCase: CreateCategoryUseCase){}

  handle(req: Request, res: Response) {
 const { name, description } = req.body;


  this.CreateCategoryUseCase.execute({ name, description });
  return res.status(201).send();
  }
}
