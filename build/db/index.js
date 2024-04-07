"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const db_config_1 = require("../config/db.config");
const agendamentoModel_1 = __importDefault(require("../models/agendamentoModel"));
class Database {
    constructor() {
        this.connectToDatabase();
    }
    async connectToDatabase() {
        this.sequelize = new sequelize_typescript_1.Sequelize({
            database: db_config_1.config.DB,
            username: db_config_1.config.USER,
            password: db_config_1.config.PASSWORD,
            host: db_config_1.config.HOST,
            dialect: db_config_1.dialect,
            pool: {
                max: db_config_1.config.pool.max,
                min: db_config_1.config.pool.min,
                acquire: db_config_1.config.pool.acquire,
                idle: db_config_1.config.pool.idle
            },
            models: [agendamentoModel_1.default]
        });
        await this.sequelize
            .authenticate()
            .then(() => {
            console.log("Connection has been established successfully.");
        })
            .catch((err) => {
            console.error("Unable to connect to the Database:", err);
        });
    }
}
exports.default = Database;
