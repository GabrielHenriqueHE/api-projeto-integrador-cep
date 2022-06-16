import { DATE, DECIMAL, STRING } from "sequelize";
import sequelizeConnection from "../../bin/config/database";

const NotaFiscal = sequelizeConnection.define("notasFiscais", {
    chaveDeAcesso: {
        type: STRING,
        allowNull: false,
        primaryKey: true,
    },
    naturezaDaOperacao: {
        type: STRING(40),
        allowNull: false,
    },
    dataEmissao: {
        type: DATE,
        allowNull: false,
        defaultValue: Date.now
    },
    totalizacaoNota: {
        type: DECIMAL(7, 2),
        allowNull: false,
    },
    dadosRemetente: {
        type: STRING(36),
        allowNull: false,
        references: {
            model: "empresas",
            key: "cnpjEmpresa"
        }
    },
    dadosDestinatario: {
        type: STRING(36),
        allowNull: false,
        references: {
            model: "empresas",
            key: "cnpjEmpresa"
        }
    }
});

NotaFiscal.sync();

export default NotaFiscal;