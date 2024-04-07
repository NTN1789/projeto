import {Router} from  "express";

import AgendamentoController from "../controllers/agendamentoController";


class AgendamentoRoutes{
     router = Router();
     controller = new AgendamentoController();

     constructor() {
        this.intializeRoutes();
      }

      intializeRoutes() {
        
        this.router.post("/", this.controller.create);
    
       
        this.router.get("/", this.controller.findAll);
    

 
        this.router.delete("/:id", this.controller.delete);
    

      }




   


}

export default new AgendamentoRoutes().router;
