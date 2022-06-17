import { uuid } from "uuidv4";
import Empresa from "../../Empresa";

export interface ICompany {
    razaoSocial: string;
    nomeFantasia: string;
    email: string;
    endereco: string;
    bairro: string;
    municipio: string;
    uf: string;
    cep: string;
}

export class CreateCompanyUseCase {

    static async execute({ bairro, cep, email, endereco, municipio, nomeFantasia, razaoSocial, uf }: ICompany): Promise<any>{

        const cnpjEmpresa = uuid();
        const inscricaoEstadual = uuid();
         
        const newCompany = await Empresa.create({ cnpjEmpresa, inscricaoEstadual, razaoSocial, nomeFantasia, email, endereco, bairro, municipio, uf, cep });
        return newCompany;
        
    }
}