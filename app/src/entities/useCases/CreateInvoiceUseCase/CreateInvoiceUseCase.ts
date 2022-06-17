import { uuid } from "uuidv4";
import NotaFiscal from "../../NotaFiscal";
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

        try {
            const newInvoice = await NotaFiscal.create({ chaveDeAcesso ,dadosDestinatario, dadosRemetente, dataEmissao, naturezaDaOperacao, totalizacaoNota });
            console.log(newInvoice);
        } catch (error) {
            console.log(error)
        }

    }       
}