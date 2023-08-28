import { Router } from "express";
import AnimalController from "./AnimalController";

const routerAnimal: Router = Router();

routerAnimal.get("/", async (request, response) => {
     const controller = new AnimalController();
     return response.send(await controller.getAll());
});

routerAnimal.get("/:id", async (request, response) => {
     const controller = new AnimalController();
     return response.send(await controller.get(request.params));
});

routerAnimal.get("/proprietario/:id", async (request, response) => {
     const controller = new AnimalController();
     return response.send(await controller.getAnimaisProprietario(request.params));
});

routerAnimal.post("/", async (request, response) => {
     const controller = new AnimalController();
     return response.send(await controller.save(request.body));
});

routerAnimal.put("/", async (request, response) => {
     const controller = new AnimalController();
     return response.send(await controller.update(request.body));
});

routerAnimal.delete("/", async (request, response) => {
     const controller = new AnimalController();
     return response.send(await controller.remove(request.body));
});

export { routerAnimal };