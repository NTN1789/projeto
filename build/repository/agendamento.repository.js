"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//import Tutorial from "../models/tutorial.model";
const agendamentoModel_1 = __importDefault(require("../models/agendamentoModel"));
class AgendamentoRepository {
    async save(agendamento) {
        try {
            return await agendamentoModel_1.default.create({
                nome: agendamento.nome,
                email: agendamento.email,
                agendou: agendamento.agendou
            });
        }
        catch (err) {
            throw new Error("Failed to create Tutorial!");
        }
    }
    async retrieveAll(searchParams) {
        try {
            let condition = {};
            if (searchParams?.published)
                condition.published = true;
            if (searchParams?.nome)
                condition.title = { [sequelize_1.Op.iLike]: `%${searchParams.nome}%` };
            return await agendamentoModel_1.default.findAll({ where: condition });
        }
        catch (error) {
            throw new Error("Failed to retrieve Tutorials!");
        }
    }
    async delete(agendamentoId) {
        try {
            const affectedRows = await agendamentoModel_1.default.destroy({ where: { id: agendamentoId } });
            return affectedRows;
        }
        catch (error) {
            throw new Error("Failed to delete Tutorial!");
        }
    }
}
exports.default = new AgendamentoRepository();
