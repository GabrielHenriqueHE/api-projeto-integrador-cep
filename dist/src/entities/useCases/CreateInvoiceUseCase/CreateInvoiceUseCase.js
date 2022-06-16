"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvoiceUseCase = void 0;
const uuidv4_1 = require("uuidv4");
const NotaFiscal_1 = __importDefault(require("../../NotaFiscal"));
const CheckIfInvoiceAlreadyExistsUseCase_1 = require("../CheckIfInvoiceAlreadyExistsUseCase/CheckIfInvoiceAlreadyExistsUseCase");
const ValidateInvoiceDataUseCase_1 = require("../ValidateInvoiceDataUseCase/ValidateInvoiceDataUseCase");
class CreateInvoiceUseCase {
    static async execute({ dadosDestinatario, dadosRemetente, dataEmissao, naturezaDaOperacao, totalizacaoNota }) {
        const chaveDeAcesso = (0, uuidv4_1.uuid)();
        if (await CheckIfInvoiceAlreadyExistsUseCase_1.CheckIfInvoiceAlreadyExistsUseCase.execute(chaveDeAcesso)) {
            throw new Error("Nota fiscal já existe");
        }
        else if (await ValidateInvoiceDataUseCase_1.ValidateInvoiceDataUseCase.execute({ dadosDestinatario, dadosRemetente, dataEmissao, naturezaDaOperacao, totalizacaoNota })) {
            throw new Error("Dados inválidos.");
        }
        else {
            try {
                const newInvoice = await NotaFiscal_1.default.create({ chaveDeAcesso, dadosDestinatario, dadosRemetente, dataEmissao, naturezaDaOperacao, totalizacaoNota });
                console.log(newInvoice);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
exports.CreateInvoiceUseCase = CreateInvoiceUseCase;
