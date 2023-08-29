import express from "express";
import swaggerUi from "swagger-ui-express";

import {routerAnimal} from "./useCase/animal/AnimalRouter";
import {routerProprietario} from "./useCase/proprietario/ProprietarioRouter";
import {routerServico} from "./useCase/servico/ServicoRouter"

export class App{
  
  //TODO: IMplementar log.

  public server: express.Application = express();

  constructor(){
    this.server;
    this.middleware();
    this.router();
    this.swagger();
    this.public();
  }

  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    this.server.use("/animal", routerAnimal);
    this.server.use("/proprietario", routerProprietario);
    this.server.use("/servico", routerServico);
  }

  private swagger(){

    this.server.use("/docs",
                    swaggerUi.serve,
                    swaggerUi.setup(undefined, {
                      swaggerOptions: {
                        url: "/swagger.json",
                      },
    }));
  }

  private public(){
    this.server.use(express.static("public"));
  }
}
