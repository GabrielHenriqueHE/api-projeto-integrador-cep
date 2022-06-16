"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanyUseCase = void 0;
const uuidv4_1 = require("uuidv4");
const Empresa_1 = __importDefault(require("../../Empresa"));
class CreateCompanyUseCase {
    static async execute({ bairro, cep, email, endereco, municipio, nomeFantasia, razaoSocial, uf }) {
        const cnpjEmpresa = (0, uuidv4_1.uuid)();
        const inscricaoEstadual = (0, uuidv4_1.uuid)();
        const newCompany = await Empresa_1.default.create({ cnpjEmpresa, inscricaoEstadual, razaoSocial, nomeFantasia, email, endereco, bairro, municipio, uf, cep });
        return newCompany;
    }
}
exports.CreateCompanyUseCase = CreateCompanyUseCase;
