import { Request, Response } from "express";
import { CreateCompanyUseCase } from "../entities/useCases/CreateCompanyUseCase/CreateCompanyUseCase";

export default async function CreateCompanyController (req: Request, res: Response): Promise<any> {
    
    const newCompany = await CreateCompanyUseCase.execute(req.body)

    return res.status(201).json(newCompany);
}