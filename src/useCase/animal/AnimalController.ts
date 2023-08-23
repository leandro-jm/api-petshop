import { doesNotThrow } from "assert";
import { Delete, Get, Post, Put, Route } from "tsoa";
const Animal = require('../../models/Animal');

@Route("animal")
export default class AnimalController {

    @Get("/")
    public async getAll()  {

        const animais =  await Animal.findAll();
        return JSON.stringify(animais)
    }

    @Get("/")
    public async get(params: any)  {

        const {id} = params;

        const animal =  await Animal.findByPk(id);

        if (!animal) {
            return { message: 'Animal não encontrado' };
        }
      
        return animal
    }

    @Get("/")
    public async getAnimaisProprietario(params: any)  {

        const {id} = params;

        const animais =  await Animal.findAll({where: {proprietario_id: id}});
        return JSON.stringify(animais)

    }

    @Post("/")
    public async save(params: any)  {

        const {nome, tipo, proprietario_id} = params;

        const animais =  await Animal.create({nome, tipo, proprietario_id});
        return JSON.stringify(animais)
    }

    @Put("/")
    public async update(params: any)  {

        const {id, nome, tipo, propriedade_id} = params;

        const animal = await Animal.findByPk(id);

        if (!animal) {
          return { message: 'Animal não encontrado' };
        }
    
        await animal.update(params);
        return { message: 'Animal atualizado com sucesso!' }
    }

    @Delete("/")
    public async remove(params: any)  {

        const {id} = params;

        const animal =  await Animal.findByPk(id);

        if (!animal) {
            return { message: 'Animal não encontrado' };
        }
      
        await animal.destroy();
        return { message: 'Animal excluido com sucesso!' }
    }
}



