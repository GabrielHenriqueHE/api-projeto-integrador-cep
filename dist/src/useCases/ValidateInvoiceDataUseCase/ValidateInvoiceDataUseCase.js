"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateInvoiceDataUseCase = void 0;
class ValidateInvoiceDataUseCase {
    static async execute({ dadosDestinatario, dadosRemetente, dataEmissao, naturezaDaOperacao, totalizacaoNota }) {
        let errors = [];
        if (dadosDestinatario.length != 18) {
            errors.push();
        }
    }
}
exports.ValidateInvoiceDataUseCase = ValidateInvoiceDataUseCase;
