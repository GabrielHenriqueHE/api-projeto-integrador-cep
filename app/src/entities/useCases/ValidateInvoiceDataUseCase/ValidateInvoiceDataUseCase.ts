import Empresa from "../../Empresa";
import NotaFiscal from "../../NotaFiscal";
import { IInvoice } from "../CreateInvoiceUseCase/CreateInvoiceUseCase";

export class ValidateInvoiceDataUseCase {

    static async execute({ dadosDestinatario, dadosRemetente, naturezaDaOperacao }: IInvoice): Promise<Object> {
        let errors: Object[] = []

        if (dadosDestinatario.length != 36 || dadosRemetente.length != 36) {
            errors.push({ message: "Número de caracteres inválido. Os dados das empresas devem conter 36 caracteres." });
        }

        const cnpjDestinatario = await Empresa.findOne({ where: { cnpjEmpresa: dadosDestinatario } });

        if (!cnpjDestinatario) {
            errors.push({ message: "A empresa não foi cadastrada" });
        }

        const cnpjRemetente = await Empresa.findOne({ where: { cnpjEmpresa: dadosRemetente } });

        if (!cnpjRemetente) {
            errors.push({ message: "A empresa não foi cadastrada" });
        }

        if (cnpjDestinatario == cnpjRemetente) {
            errors.push({ message: "Foram inseridos dois CNPJ iguais" });
        }

        if (naturezaDaOperacao.length < 5 || naturezaDaOperacao.length > 40) {
            errors.push({ message: "Número de caracteres inválido. Verifique se você inseriu menos que 5 ou mais que 40 caracteres." })
        }

        if (errors.length > 1) {
            return errors;
        } else return false;
        
    }
    
}