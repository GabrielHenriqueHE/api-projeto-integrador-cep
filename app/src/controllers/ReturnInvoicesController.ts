import { Request, Response } from "express";
import { ReturnInvoicesUseCase } from "../entities/useCases/ReturnInvoicesUseCase/ReturnInvoicesUseCase";

export async function ReturnInvoicesController(req: Request, res: Response): Promise<any> {
    
    const invoices = await ReturnInvoicesUseCase();

    if (!invoices) {
        return res.status(200).json({ message: "Não há notas cadastradas." });
    }

    return res.status(200).json(invoices)
    
}