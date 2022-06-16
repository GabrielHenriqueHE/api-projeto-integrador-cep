import { CHAR, STRING } from "sequelize";
import sequelizeConnection from "../../bin/config/database";

const Empresa = sequelizeConnection.define("empresa", {
    cnpjEmpresa: {
        type: STRING,
        allowNull: false,
        primaryKey: true,
    },
    inscricaoEstadual: {
        type: STRING,
        allowNull: false,
    },
    razaoSocial: {
        type: STRING(60),
        allowNull: false,
    },
    nomeFantasia: {
        type: STRING(60),
    },
    email: {
        type: STRING(),
        allowNull: false,
    },
    endereco: {
        type: STRING(60),
        allowNull: false,
    },
    bairro: {
        type: STRING(40),
        allowNull: false
    },
    municipio: {
        type: STRING(60),
        allowNull: false,
    },
    uf: {
        type: CHAR(2),
        allowNull: false,
    },
    cep: {
        type: STRING(9),
        allowNull: false
    }
})

Empresa.sync()
export default Empresa;