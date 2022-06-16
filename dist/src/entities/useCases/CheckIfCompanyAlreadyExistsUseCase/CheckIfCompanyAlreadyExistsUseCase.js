"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIfCompanyAlreadyExistsUseCase = void 0;
const Empresa_1 = __importDefault(require("../../Empresa"));
class CheckIfCompanyAlreadyExistsUseCase {
    static async execute(cnpjEmpresa, razaoSocial) {
        const companyAlreadyExists = await Empresa_1.default.findOne({ where: { cnpjEmpresa: cnpjEmpresa } }) || await Empresa_1.default.findOne({ where: { razaoSocial: razaoSocial } });
        if (companyAlreadyExists) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.CheckIfCompanyAlreadyExistsUseCase = CheckIfCompanyAlreadyExistsUseCase;
