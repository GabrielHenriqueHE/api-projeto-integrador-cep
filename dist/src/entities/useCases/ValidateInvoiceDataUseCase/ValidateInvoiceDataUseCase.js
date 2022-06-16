"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateInvoiceDataUseCase = void 0;
const Empresa_1 = __importDefault(require("../../Empresa"));
class ValidateInvoiceDataUseCase {
    static async execute({ dadosDestinatario, dadosRemetente, naturezaDaOperacao }) {
        let errors = [];
        if (dadosDestinatario.length != 36 || dadosRemetente.length != 36) {
            errors.push({ message: "Número de caracteres inválido. Os dados das empresas devem conter 36 caracteres." });
        }
        const cnpjDestinatario = await Empresa_1.default.findOne({ where: { cnpjEmpresa: dadosDestinatario } });
        if (!cnpjDestinatario) {
            errors.push({ message: "A empresa não foi cadastrada" });
        }
        const cnpjRemetente = await Empresa_1.default.findOne({ where: { cnpjEmpresa: dadosRemetente } });
        if (!cnpjRemetente) {
            errors.push({ message: "A empresa não foi cadastrada" });
        }
        if (cnpjDestinatario == cnpjRemetente) {
            errors.push({ message: "Foram inseridos dois CNPJ iguais" });
        }
        if (naturezaDaOperacao.length < 5 || naturezaDaOperacao.length > 40) {
            errors.push({ message: "Número de caracteres inválido. Verifique se você inseriu menos que 5 ou mais que 40 caracteres." });
        }
        if (errors.length > 1) {
            return errors;
        }
        else
            return false;
    }
}
exports.ValidateInvoiceDataUseCase = ValidateInvoiceDataUseCase;
