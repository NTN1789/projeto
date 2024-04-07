import { Request, Response }  from "express"

import Agendamento from "../models/agendamentoModel";

import agendamentoRepository from "../repository/agendamento.repository";


export default class AgendamentoController {

     async create(req: Request, res: Response) {
   

    try { 
        const agendamento:Agendamento = req.body;

        const saveAgendamento = await agendamentoRepository.save(agendamento)
       
        res.status(201).send(saveAgendamento);
        } catch (error) {
            res.status(500).send({ message: "Error ao criar Agendamento" });
        
    }

    }


    async findAll(req: Request, res: Response) {
        const nome = typeof req.query.nome === "string" ? req.query.nome : "";
      
 try {
    const agendamento = await agendamentoRepository.retrieveAll({nome});
    res.status(200).send(agendamento);
} catch (err) {
    res.status(500).send({ message: "Error ao  Agendamento" });
    
 }
      
    
    }


      async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
    
        try {
          const num = await agendamentoRepository.delete(id);
    
          if (num == 1) {
            res.send({
              message: "agendamento deletado com sucesso!"
            });
          } else {
            res.send({
              message: ` delete agendamento com id=${id}. não encontrado!`,
            });
          }
        } catch (err) {
          res.status(500).send({
            message: ` id==${id}.`
          });
        }
      }

}