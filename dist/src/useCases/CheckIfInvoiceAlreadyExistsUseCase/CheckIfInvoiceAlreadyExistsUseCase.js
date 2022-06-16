"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIfInvoiceAlreadyExistsUseCase = void 0;
const NotaFiscal_1 = __importDefault(require("../../entities/NotaFiscal"));
class CheckIfInvoiceAlreadyExistsUseCase {
    static async execute(chaveDeAcesso) {
        if (await NotaFiscal_1.default.findOne({ where: { chaveDeAcesso: chaveDeAcesso } })) {
            return true;
        }
        else
            return false;
    }
}
exports.CheckIfInvoiceAlreadyExistsUseCase = CheckIfInvoiceAlreadyExistsUseCase;
