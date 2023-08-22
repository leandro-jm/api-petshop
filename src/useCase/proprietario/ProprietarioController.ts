import { doesNotThrow } from "assert";
import { Get, Route } from "tsoa";
const Proprietario = require('../../models/Proprietario');

@Route("proprietario")
export default class ProprietarioController {

    @Get("/")
    public async getAll()  {

        const proprietarios =  await Proprietario.findAll();
        return JSON.stringify(proprietarios)
    }
}



