import { QueryTypes } from "sequelize";
import { Delete, Get, Post, Put, Route } from "tsoa";

const Servico = require('../../models/Servico');
const db = require('../../config/DatabaseSequelize');

@Route("servico")
export default class ServicoController {

    @Get("/")
    public async getAll()  {

        const servicos =  await Servico.findAll();
        return JSON.stringify(servicos)
    }

    @Get("/{params}")
    public async get(params: any)  {

        const {id} = params;

        const servico =  await Servico.findByPk(id);

        if (!servico) {
            return { message: 'Servico não encontrado' };
        }
      
        return servico
    }

    @Get("/proprietario/{params}")
    public async getServicoProprietario(params: any)  {

        const {id} = params;

        const servicos = await db.query(
            'SELECT s.* FROM servico s INNER JOIN animal a ON (s.animal_id=a.animal_id) WHERE a.proprietario_id  = :proprietario_id',
            {
                replacements: {proprietario_id: id},
                type: QueryTypes.SELECT
            })

        return JSON.stringify(servicos)

    }

    @Post("/{params}")
    public async save(params: any)  {

        const {descricao, valor, animal_id} = params;

        const servico =  await Servico.create({descricao, valor, animal_id});
        return JSON.stringify(servico)
    }

    @Put("/{params}")
    public async update(params: any)  {

        const {id, descricao, valor, animal_id} = params;

        const servico = await Servico.findByPk(id);

        if (!servico) {
          return { message: 'Serviço não encontrado' };
        }
    
        await servico.update(params);
        return { message: 'Serviço atualizado com sucesso!' }
    }

    @Delete("/{params}")
    public async remove(params: any)  {

        const {id} = params;

        const servico =  await Servico.findByPk(id);

        if (!servico) {
            return { message: 'Serviço não encontrado' };
        }
      
        await servico.destroy();
        return { message: 'Serviço excluido com sucesso!' }
    }
}



