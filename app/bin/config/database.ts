import { Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize('sistemaDeNotasFiscais', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelizeConnection.authenticate().then(() => {
    console.log("Connection estabilished.")
}).catch(() => {
    console.log("Connection failed.")
})

export default sequelizeConnection;