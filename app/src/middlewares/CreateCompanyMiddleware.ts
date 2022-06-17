import { Request, Response, NextFunction } from "express";
import { ICompany } from "../entities/useCases/CreateCompanyUseCase/CreateCompanyUseCase";
import { ValidateCompanyDataUseCase } from "../entities/useCases/ValidateCompanyDataUseCase/ValidateCompanyDataUseCase";


export async function CreateCompanyMiddleware(req: Request, res: Response, next: NextFunction): Promise<any> {
    
    const data: ICompany = req.body;

    try {

        const errors: Object[] = await ValidateCompanyDataUseCase.execute(data)
    
        if (errors) {
            return res.status(400).json(errors)
        }
    
        return next();

    } catch (error) {
        
        return res.status(500).json({ message: "A razão social pertence a outra pessoa." })

    }
    
}