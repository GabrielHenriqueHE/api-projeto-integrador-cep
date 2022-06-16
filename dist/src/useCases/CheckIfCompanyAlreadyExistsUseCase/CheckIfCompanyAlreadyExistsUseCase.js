"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIfCompanyAlreadyExistsUseCase = void 0;
const Empresa_1 = __importDefault(require("../../entities/Empresa"));
class CheckIfCompanyAlreadyExistsUseCase {
    static async execute(cnpjEmpresa) {
        const companyAlreadyExists = await Empresa_1.default.findOne({ where: { cnpjEmpresa: cnpjEmpresa } });
        if (companyAlreadyExists) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.CheckIfCompanyAlreadyExistsUseCase = CheckIfCompanyAlreadyExistsUseCase;
