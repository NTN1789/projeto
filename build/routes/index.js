"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const agendameto_routes_1 = __importDefault(require("./agendameto.routes"));
class Routes {
    constructor(app) {
        app.get('/test', (req, res) => {
            res.send('Hello World!');
        });
        app.use('/api/agendamento', agendameto_routes_1.default);
    }
}
exports.default = Routes;
