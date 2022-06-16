"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanyUseCase = void 0;
const uuidv4_1 = require("uuidv4");
const Empresa_1 = __importDefault(require("../../entities/Empresa"));
const CheckIfCompanyAlreadyExistsUseCase_1 = require("../CheckIfCompanyAlreadyExistsUseCase/CheckIfCompanyAlreadyExistsUseCase");
class CreateCompanyUseCase {
    static async execute({ bairro, cep, email, endereco, municipio, nomeFantasia, razaoSocial, uf }) {
        const cnpjEmpresa = (0, uuidv4_1.uuid)();
        const inscricaoEstadual = (0, uuidv4_1.uuid)();
        if (await CheckIfCompanyAlreadyExistsUseCase_1.CheckIfCompanyAlreadyExistsUseCase.execute(cnpjEmpresa)) {
            throw new Error("Empresa já está cadastrada");
        }
        else {
            try {
                const newCompany = await Empresa_1.default.create({ cnpjEmpresa, inscricaoEstadual, razaoSocial, nomeFantasia, email, endereco, bairro, municipio, uf, cep });
                console.log(newCompany);
            }
            catch (error) {
                throw new Error("Ocorreu um erro ao cadastrar a empresa");
            }
        }
    }
}
exports.CreateCompanyUseCase = CreateCompanyUseCase;
CreateCompanyUseCase.execute({
    bairro: "Bairro",
    cep: "CEP",
    email: "email@email.com",
    endereco: "Rua da polícia",
    municipio: "asii",
    nomeFantasia: "Padaria Guimarães",
    razaoSocial: "Padaria do Zé",
    uf: "MG"
});
