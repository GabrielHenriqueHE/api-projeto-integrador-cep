import { Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize('sql10500217', 'sql10500217', 'V6hRgMh88u', {
    host: 'sql10.freemysqlhosting.net',
    dialect: 'mysql'
});

sequelizeConnection.authenticate().then(() => {
    console.log("Connection estabilished.")
}).catch(() => {
    console.log("Connection failed.")
})

export default sequelizeConnection;