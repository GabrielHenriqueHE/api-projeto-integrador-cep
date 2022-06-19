"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../bin/config/database"));
const Empresa = database_1.default.define("empresa", {
    cnpjEmpresa: {
        type: sequelize_1.STRING,
        allowNull: false,
        primaryKey: true,
    },
    inscricaoEstadual: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    razaoSocial: {
        type: (0, sequelize_1.STRING)(60),
        allowNull: false,
    },
    nomeFantasia: {
        type: (0, sequelize_1.STRING)(60),
    },
    email: {
        type: (0, sequelize_1.STRING)(),
        allowNull: false,
    },
    endereco: {
        type: (0, sequelize_1.STRING)(60),
        allowNull: false,
    },
    bairro: {
        type: (0, sequelize_1.STRING)(40),
        allowNull: false
    },
    municipio: {
        type: (0, sequelize_1.STRING)(60),
        allowNull: false,
    },
    uf: {
        type: (0, sequelize_1.CHAR)(2),
        allowNull: false,
    },
    cep: {
        type: (0, sequelize_1.STRING)(9),
        allowNull: false
    }
});
Empresa.sync();
exports.default = Empresa;
