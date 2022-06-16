"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvoiceUseCase = void 0;
const uuidv4_1 = require("uuidv4");
const NotaFiscal_1 = __importDefault(require("../../entities/NotaFiscal"));
const CheckIfInvoiceAlreadyExistsUseCase_1 = require("../CheckIfInvoiceAlreadyExistsUseCase/CheckIfInvoiceAlreadyExistsUseCase");
class CreateInvoiceUseCase {
    static async execute({ dadosDestinatario, dadosRemetente, dataEmissao, naturezaDaOperacao, totalizacaoNota }) {
        const chaveDeAcesso = (0, uuidv4_1.uuid)();
        if (await CheckIfInvoiceAlreadyExistsUseCase_1.CheckIfInvoiceAlreadyExistsUseCase.execute(chaveDeAcesso)) {
            return false; // Nota fiscal já existe
        }
        try {
            await NotaFiscal_1.default.create({ dadosDestinatario, dadosRemetente, dataEmissao, naturezaDaOperacao, totalizacaoNota });
            return true; // Nota fiscal não existe e foi cadastrada com sucesso.
        }
        catch (error) {
            return false; // Nota fiscal não existe e ocorreu um erro ao cadastrá-la
        }
    }
}
exports.CreateInvoiceUseCase = CreateInvoiceUseCase;
