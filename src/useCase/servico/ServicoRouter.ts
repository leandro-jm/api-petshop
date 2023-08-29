import { Router } from "express";
import ServicoController from "./ServicoController";

const routerServico: Router = Router();

routerServico.get("/", async (request, response) => {
     const controller = new ServicoController();
     return response.send(await controller.getAll());
});

routerServico.get("/:id", async (request, response) => {
     const controller = new ServicoController();
     return response.send(await controller.get(request.params));
});

routerServico.get("/proprietario/:id", async (request, response) => {
     const controller = new ServicoController();
     return response.send(await controller.getServicoProprietario(request.params));
});

routerServico.post("/", async (request, response) => {
     const controller = new ServicoController();
     return response.send(await controller.save(request.body));
});

routerServico.put("/", async (request, response) => {
     const controller = new ServicoController();
     return response.send(await controller.update(request.body));
});

routerServico.delete("/", async (request, response) => {
     const controller = new ServicoController();
     return response.send(await controller.remove(request.body));
});

export { routerServico };