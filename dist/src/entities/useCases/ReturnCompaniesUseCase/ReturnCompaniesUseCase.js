"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnCompaniesUseCase = void 0;
const Empresa_1 = __importDefault(require("../../Empresa"));
async function ReturnCompaniesUseCase() {
    const companies = await Empresa_1.default.findAll({});
    if (companies.length >= 1) {
        return companies;
    }
    else
        return false;
}
exports.ReturnCompaniesUseCase = ReturnCompaniesUseCase;
