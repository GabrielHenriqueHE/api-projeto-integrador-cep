import { ICompany } from "../CreateCompanyUseCase/CreateCompanyUseCase";
import Empresa from "../../Empresa";

export class ValidateCompanyDataUseCase {

    static async execute({ bairro, cep, email, endereco, municipio, nomeFantasia, razaoSocial, uf }: ICompany): Promise<any> {
        let errors: Object[] = [];

        var emailRegex = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);

        const companyAlreadyExists = await Empresa.findOne({ where: { razaoSocial: razaoSocial } });

        if (companyAlreadyExists) {
            errors.push({ message: "A razão social já pertence a outra empresa." })
        }

        if (bairro.length < 3 || bairro.length > 40) {
            errors.push({ message: "Número de caracteres inválidos. Verifique se você inseriu menos que 3 ou mais que 40 caracteres." })
        }

        if (cep.length != 9) {
            errors.push({ message: "Número de caracteres inválidos. O CEP deve conter 9 caracteres." })
        }

        if (email.length < 3 || !emailRegex.test(email) || email.length > 255) {
            errors.push({ message: "Email inválido. Verifique o número de caracteres ou se o email está formatado corretamente" });
        }

        if (endereco.length < 3 || endereco.length > 60) {
            errors.push({ message: "Número de caracteres inválido. Verifique se você inseriu menos que 3 ou mais que 60 caracteres." })
        }
        
        if (municipio.length < 3 || municipio.length > 60) {
            errors.push({ message: "Número de caracteres inválido. Verifique se você inseriu menos que 3 ou mais que 60 caracteres." });
        }

        if (nomeFantasia.length > 60) {
            errors.push({ message: "Número de caracteres inválido. Verifique se você inseriu mais que 60 caracteres." })
        }

        if (razaoSocial.length < 10 || razaoSocial.length > 60) {
            errors.push({ message: "Número de caracteres inválido. Verifique se você inseriu menos que 10 ou mais que 60 caracteres." });
        }

        if (uf.length != 2) {
            errors.push({ message: "Número de caracteres inválido. A UF deve conter 2 caracteres." });
        }

        if (errors.length >= 1) {
            return errors;
        } else return false;

    }
    
}