"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnCompaniesController = void 0;
const ReturnCompaniesUseCase_1 = require("../entities/useCases/ReturnCompaniesUseCase/ReturnCompaniesUseCase");
async function ReturnCompaniesController(req, res) {
    const companies = await (0, ReturnCompaniesUseCase_1.ReturnCompaniesUseCase)();
    if (!companies) {
        return res.status(200).json({ message: "Não há empresas cadastradas." });
    }
    return res.status(200).json(companies);
}
exports.ReturnCompaniesController = ReturnCompaniesController;
