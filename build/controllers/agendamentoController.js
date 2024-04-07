"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const agendamento_repository_1 = __importDefault(require("../repository/agendamento.repository"));
class AgendamentoController {
    async create(req, res) {
        try {
            const agendamento = req.body;
            const saveAgendamento = await agendamento_repository_1.default.save(agendamento);
            res.status(201).send(saveAgendamento);
        }
        catch (error) {
            res.status(500).send({ message: "Error creating Agendamento" });
        }
    }
    async findAll(req, res) {
        const nome = typeof req.query.nome === "string" ? req.query.nome : "";
        try {
            const agendamento = await agendamento_repository_1.default.retrieveAll({ nome });
            res.status(200).send(agendamento);
        }
        catch (err) {
            res.status(500).send({ message: "Error retrieving Agendamento" });
        }
    }
    async delete(req, res) {
        const id = parseInt(req.params.id);
        try {
            const num = await agendamento_repository_1.default.delete(id);
            if (num == 1) {
                res.send({
                    message: "agendamento deletado com sucesso!"
                });
            }
            else {
                res.send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
                });
            }
        }
        catch (err) {
            res.status(500).send({
                message: `Could not delete Tutorial with id==${id}.`
            });
        }
    }
}
exports.default = AgendamentoController;
