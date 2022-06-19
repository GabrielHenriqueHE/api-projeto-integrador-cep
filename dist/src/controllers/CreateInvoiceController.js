"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateInvoiceUseCase_1 = require("../entities/useCases/CreateInvoiceUseCase/CreateInvoiceUseCase");
async function CreateInvoiceController(req, res) {
    try {
        const newInvoice = await CreateInvoiceUseCase_1.CreateInvoiceUseCase.execute(req.body);
        return res.status(201).json(newInvoice);
    }
    catch (error) {
        return res.status(500).json({ message: "Um erro interno ocorreu." });
    }
}
exports.default = CreateInvoiceController;
