import { Op } from "sequelize";
//import Tutorial from "../models/tutorial.model";

import Agendamento from "../models/agendamentoModel";


interface IAgendamentoRepository {
  save(data: Agendamento): Promise<Agendamento>;
  retrieveAll(searchParams: {title: string, published: boolean}): Promise<Agendamento[]>;
  delete(tutorialId: number): Promise<number>;

}

interface SearchCondition {
  [key: string]: any;
}

class  AgendamentoRepository implements IAgendamentoRepository{
  async save(agendamento: Agendamento): Promise<Agendamento> {
    try {
      return await Agendamento.create({
          email: agendamento.email, 
         nome: agendamento.nome,
        agendou: agendamento.agendou
  
      });
    } catch (err) {
      throw new Error("Failed to create Tutorial!");
    }
  }

  async retrieveAll(searchParams: {nome?: string, published?: boolean}): Promise<Agendamento[]> {
    try {
      let condition: SearchCondition = {};

      if (searchParams?.published) condition.published = true;

      if (searchParams?.nome)
        condition.title = { [Op.iLike]: `%${searchParams.nome}%` };

      return await  Agendamento.findAll({ where: condition });
    } catch (error) {
      throw new Error("erro ao criar !");
    }
  }




  async delete(agendamentoId: number): Promise<number> {
    try {
      const affectedRows = await Agendamento.destroy({ where: { id: agendamentoId } });

      return affectedRows;
    } catch (error) {
      throw new Error("error ao deletar!");
    }
  }


}

export default new AgendamentoRepository();
