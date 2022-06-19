"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvoiceMiddleware = void 0;
const ValidateInvoiceDataUseCase_1 = require("../entities/useCases/ValidateInvoiceDataUseCase/ValidateInvoiceDataUseCase");
async function CreateInvoiceMiddleware(req, res, next) {
    const data = req.body;
    const errors = await ValidateInvoiceDataUseCase_1.ValidateInvoiceDataUseCase.execute(data);
    if (errors) {
        return res.status(400).json(errors);
    }
    return next();
}
exports.CreateInvoiceMiddleware = CreateInvoiceMiddleware;
