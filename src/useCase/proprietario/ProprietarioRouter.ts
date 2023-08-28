import { Router } from "express";
import ProprietarioController from "./ProprietarioController";

const routerProprietario: Router = Router();

routerProprietario.get("/", async (request, response) => {
     const controller = new ProprietarioController();
     return response.send(await controller.getAll());
});

routerProprietario.get("/:id", async (request, response) => {
     const controller = new ProprietarioController();
     return response.send(await controller.get(request.params));
});

routerProprietario.post("/", async (request, response) => {
     const controller = new ProprietarioController();
     return response.send(await controller.save(request.body));
});

routerProprietario.put("/", async (request, response) => {
     const controller = new ProprietarioController();
     return response.send(await controller.update(request.body));
});

routerProprietario.delete("/", async (request, response) => {
     const controller = new ProprietarioController();
     return response.send(await controller.remove(request.body));
});

export { routerProprietario };