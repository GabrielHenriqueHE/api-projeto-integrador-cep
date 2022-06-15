import { Sequelize } from "sequelize/types"

const sequelizeConnection = new Sequelize('sistemaDeNotasFiscais', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelizeConnection.authenticate()
    console.log("Connection has estabilished.")
} catch (error) {
    console.log(`Connection failure. Error: ${error}`);
}

export default sequelizeConnection;