"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agendamentoController_1 = __importDefault(require("../controllers/agendamentoController"));
class AgendamentoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new agendamentoController_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.post("/", this.controller.create);
        this.router.get("/", this.controller.findAll);
        this.router.delete("/:id", this.controller.delete);
    }
}
exports.default = new AgendamentoRoutes().router;
