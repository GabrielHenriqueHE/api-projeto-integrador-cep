"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function index(req, res) {
    return res.status(200).json({ message: "Estou rodando" });
}
exports.default = index;
