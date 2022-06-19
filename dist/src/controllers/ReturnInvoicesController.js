"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnInvoicesController = void 0;
const ReturnInvoicesUseCase_1 = require("../entities/useCases/ReturnInvoicesUseCase/ReturnInvoicesUseCase");
async function ReturnInvoicesController(req, res) {
    const invoices = await (0, ReturnInvoicesUseCase_1.ReturnInvoicesUseCase)();
    if (!invoices) {
        return res.status(200).json({ message: "Não há notas cadastradas." });
    }
    return res.status(200).json(invoices);
}
exports.ReturnInvoicesController = ReturnInvoicesController;
