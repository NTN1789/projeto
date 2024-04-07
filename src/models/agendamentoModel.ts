import { Model, Table,Column,DataType } from "sequelize-typescript";


@Table({
    tableName: 'project-agendamento',
 
})


export default class Agendamento extends Model {
    @Column({
        type: DataType.INTEGER,
      
        autoIncrement: true,
        primaryKey: true,
    })
    id?: number;
    
    

    @Column({
        type: DataType.STRING(255),
        field: "nome",
    })

    nome?:string;

    @Column({
        type: DataType.STRING(255),
       field: 'email',
    })
    email?:string;


    @Column({
        type: DataType.STRING(255),
        field: 'agendou',
    })
    agendou?:boolean;


};