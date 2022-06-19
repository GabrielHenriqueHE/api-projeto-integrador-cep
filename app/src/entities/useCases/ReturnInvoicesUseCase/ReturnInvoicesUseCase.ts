import Empresa from "../../Empresa";
import NotaFiscal from "../../NotaFiscal";

export async function ReturnInvoicesUseCase(): Promise<any> {

    const invoices = await NotaFiscal.findAll({ })
    const companies = await Empresa.findAll({ })

    if (invoices.length >= 1) {
        return { invoices: invoices, companies: companies };
    } else return false;

}