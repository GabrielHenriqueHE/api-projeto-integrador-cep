"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCompanyUseCase_1 = require("../entities/useCases/CreateCompanyUseCase/CreateCompanyUseCase");
async function CreateCompanyController(req, res) {
    const newCompany = await CreateCompanyUseCase_1.CreateCompanyUseCase.execute(req.body);
    return res.status(201).json(newCompany);
}
exports.default = CreateCompanyController;
