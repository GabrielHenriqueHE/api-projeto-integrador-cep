import { Request, Response } from "express";
import { CreateInvoiceUseCase } from "../entities/useCases/CreateInvoiceUseCase/CreateInvoiceUseCase";

export default async function CreateInvoiceController (req: Request, res: Response): Promise<any> {

    try {

        const newInvoice = await CreateInvoiceUseCase.execute(req.body)
    
        return res.status(201).json(newInvoice);

    } catch (error) {
        
        return res.status(500).json({ message: "Um erro interno ocorreu." })
        
    }

} 