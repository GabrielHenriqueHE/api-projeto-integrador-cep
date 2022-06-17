import NotaFiscal from "../../NotaFiscal";

export async function ReturnInvoicesUseCase(): Promise<any> {

    const invoices = await NotaFiscal.findAll({  })

    if (invoices.length >= 1) {
        return invoices;
    } else return false;
    
}