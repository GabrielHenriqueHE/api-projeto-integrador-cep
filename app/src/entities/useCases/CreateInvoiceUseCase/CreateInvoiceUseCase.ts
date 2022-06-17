import { uuid } from "uuidv4";
import NotaFiscal from "../../NotaFiscal";
import { CheckIfInvoiceAlreadyExistsUseCase } from "../CheckIfInvoiceAlreadyExistsUseCase/CheckIfInvoiceAlreadyExistsUseCase";
import { ValidateInvoiceDataUseCase } from "../ValidateInvoiceDataUseCase/ValidateInvoiceDataUseCase";

export interface IInvoice {
    naturezaDaOperacao: string;
    dataEmissao: Date;
    totalizacaoNota: Number;
    dadosRemetente: string;
    dadosDestinatario: string;
}

export class CreateInvoiceUseCase {

    static async execute({ dadosDestinatario, dadosRemetente, dataEmissao, naturezaDaOperacao, totalizacaoNota }: IInvoice): Promise<void> {
        
        const chaveDeAcesso = uuid();

        if (await CheckIfInvoiceAlreadyExistsUseCase.execute(chaveDeAcesso)) {
            throw new Error("Nota fiscal já existe");
        } else if (await ValidateInvoiceDataUseCase.execute({ dadosDestinatario, dadosRemetente, dataEmissao, naturezaDaOperacao, totalizacaoNota })) {
            throw new Error("Dados inválidos.");
        } else {
            try {
                const newInvoice = await NotaFiscal.create({ chaveDeAcesso ,dadosDestinatario, dadosRemetente, dataEmissao, naturezaDaOperacao, totalizacaoNota });
                console.log(newInvoice);
            } catch (error) {
                console.log(error)
            }
        }
        
    }
}