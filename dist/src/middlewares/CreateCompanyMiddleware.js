"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanyMiddleware = void 0;
const ValidateCompanyDataUseCase_1 = require("../entities/useCases/ValidateCompanyDataUseCase/ValidateCompanyDataUseCase");
async function CreateCompanyMiddleware(req, res, next) {
    const data = req.body;
    try {
        const errors = await ValidateCompanyDataUseCase_1.ValidateCompanyDataUseCase.execute(data);
        if (errors) {
            return res.status(400).json(errors);
        }
        return next();
    }
    catch (error) {
        return res.status(500).json({ message: "A razão social pertence a outra pessoa." });
    }
}
exports.CreateCompanyMiddleware = CreateCompanyMiddleware;
