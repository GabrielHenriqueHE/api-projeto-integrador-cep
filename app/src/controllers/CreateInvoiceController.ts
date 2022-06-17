import { Request, Response } from "express";
import { CreateInvoiceUseCase } from "../entities/useCases/CreateInvoiceUseCase/CreateInvoiceUseCase";

export default async function CreateInvoiceController (req: Request, res: Response): Promise<any> {
    
    const newInvoice = await CreateInvoiceUseCase.execute(req.body)

    return res.status(201).json(newInvoice);

}