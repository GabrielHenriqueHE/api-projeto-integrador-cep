"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../bin/config/database"));
const NotaFiscal = database_1.default.define("notasFiscais", {
    chaveDeAcesso: {
        type: sequelize_1.STRING,
        allowNull: false,
        primaryKey: true,
    },
    naturezaDaOperacao: {
        type: (0, sequelize_1.STRING)(40),
        allowNull: false,
    },
    dataEmissao: {
        type: sequelize_1.DATE,
        allowNull: false,
        defaultValue: Date.now
    },
    totalizacaoNota: {
        type: (0, sequelize_1.DECIMAL)(7, 2),
        allowNull: false,
    },
    dadosRemetente: {
        type: (0, sequelize_1.STRING)(36),
        allowNull: false,
        references: {
            model: "empresas",
            key: "cnpjEmpresa"
        }
    },
    dadosDestinatario: {
        type: (0, sequelize_1.STRING)(36),
        allowNull: false,
        references: {
            model: "empresas",
            key: "cnpjEmpresa"
        }
    }
});
NotaFiscal.sync();
exports.default = NotaFiscal;
