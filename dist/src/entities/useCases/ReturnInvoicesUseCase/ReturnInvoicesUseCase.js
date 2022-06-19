"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnInvoicesUseCase = void 0;
const Empresa_1 = __importDefault(require("../../Empresa"));
const NotaFiscal_1 = __importDefault(require("../../NotaFiscal"));
async function ReturnInvoicesUseCase() {
    const invoices = await NotaFiscal_1.default.findAll({});
    const companies = await Empresa_1.default.findAll({});
    if (invoices.length >= 1) {
        return { invoices: invoices, companies: companies };
    }
    else
        return false;
}
exports.ReturnInvoicesUseCase = ReturnInvoicesUseCase;
