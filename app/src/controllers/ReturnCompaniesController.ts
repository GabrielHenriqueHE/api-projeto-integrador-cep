import { Request, Response } from "express";
import { ReturnCompaniesUseCase } from "../entities/useCases/ReturnCompaniesUseCase/ReturnCompaniesUseCase";

export async function ReturnCompaniesController(req: Request, res: Response): Promise<any> {

    const companies = await ReturnCompaniesUseCase();

    if (!companies) {
        return res.status(200).json({ message: "Não há empresas cadastradas." });
    }

    return res.status(200).json(companies)

}