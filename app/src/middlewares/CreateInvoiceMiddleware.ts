import { Request, Response, NextFunction } from "express";

import { IInvoice } from "../entities/useCases/CreateInvoiceUseCase/CreateInvoiceUseCase";
import { ValidateInvoiceDataUseCase } from "../entities/useCases/ValidateInvoiceDataUseCase/ValidateInvoiceDataUseCase";


export async function CreateInvoiceMiddleware(req: Request, res: Response, next: NextFunction) {

    const data: IInvoice = req.body;

    const errors = await ValidateInvoiceDataUseCase.execute(data)

    if (errors) {
        return res.status(400).json(errors)
    }

    return next();

}