"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvoiceUseCase = void 0;
const uuidv4_1 = require("uuidv4");
const NotaFiscal_1 = __importDefault(require("../../NotaFiscal"));
class CreateInvoiceUseCase {
    static async execute({ dadosDestinatario, dadosRemetente, dataEmissao, naturezaDaOperacao, totalizacaoNota }) {
        const chaveDeAcesso = (0, uuidv4_1.uuid)();
        try {
            const newInvoice = await NotaFiscal_1.default.create({ chaveDeAcesso, dadosDestinatario, dadosRemetente, dataEmissao, naturezaDaOperacao, totalizacaoNota });
            console.log(newInvoice);
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.CreateInvoiceUseCase = CreateInvoiceUseCase;
