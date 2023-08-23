import { doesNotThrow } from "assert";
import { IntegerDataType } from "sequelize";
import { Delete, Get, Post, Put, Route } from "tsoa";
const Proprietario = require('../../models/Proprietario');

@Route("proprietario")
export default class ProprietarioController {

    @Get("/")
    public async getAll()  {

        const proprietarios =  await Proprietario.findAll();
        return JSON.stringify(proprietarios)
    }

    @Get("/")
    public async get(params: any)  {

        const {id} = params;

        const proprietario =  await Proprietario.findByPk(id);

        if (!proprietario) {
            return { message: 'Proprietário não encontrado' };
        }
      
        return proprietario
    }

    @Post("/")
    public async save(params: any)  {

        const {nome, telefone} = params;

        const proprietarios =  await Proprietario.create({nome, telefone});
        return JSON.stringify(proprietarios)
    }

    @Put("/")
    public async update(params: any)  {

        const {id, nome, telefone} = params;

        const proprietario = await Proprietario.findByPk(id);

        if (!proprietario) {
          return { message: 'Proprietário não encontrado' };
        }
    
        await proprietario.update(params);
        return { message: 'Proprietário atualizado com sucesso!' }
    }

    @Delete("/")
    public async remove(params: any)  {

        const {id} = params;

        //TODO: Verificar se tem animais.

        const proprietario =  await Proprietario.findByPk(id);

        if (!proprietario) {
            return { message: 'Proprietário não encontrado' };
        }
      
        await proprietario.destroy();
        return { message: 'Proprietário excluido com sucesso!' }
    }
}



