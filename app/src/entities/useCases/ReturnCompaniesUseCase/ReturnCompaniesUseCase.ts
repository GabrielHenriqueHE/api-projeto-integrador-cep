import Empresa from "../../Empresa";

export async function ReturnCompaniesUseCase(): Promise<any> {

    const companies = await Empresa.findAll({  })

    if (companies.length >= 1) {
        return companies;
    } else return false;

}