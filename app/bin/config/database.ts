import { Sequelize } from "sequelize";

const port = Number(process.env.PORT) || 3306;

const sequelizeConnection = new Sequelize('sistemaDeNotasFiscais', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: port
});

sequelizeConnection.authenticate().then(() => {
    console.log("Connection estabilished.")
}).catch(() => {
    console.log("Connection failed.")
})

export default sequelizeConnection;