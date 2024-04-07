import { Application } from "express";
import agendametoRoutes from "./agendameto.routes";


export default class Routes {
    constructor(app: Application){
        app.get('/test', (req, res) => {
            res.send('Hello World!')
        });
        app.use('/api/agendamento', agendametoRoutes);
    }
}