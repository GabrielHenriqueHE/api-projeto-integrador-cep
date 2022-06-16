"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizeConnection = new sequelize_1.Sequelize('sistemaDeNotasFiscais', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelizeConnection.authenticate().then(() => {
    console.log("Connection estabilished.");
}).catch(() => {
    console.log("Connection failed.");
});
exports.default = sequelizeConnection;
