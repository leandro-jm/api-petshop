import { Router } from "express";
import ProprietarioController from "./useCase/proprietario/ProprietarioController";
import AnimalController from "./useCase/animal/AnimalController";

const router: Router = Router();

//Routes

//** Proprietario

router.get("/proprietario", async (request, response) => {
     const controller = new ProprietarioController();
     return response.send(await controller.getAll());
});

router.get("/proprietario/:id", async (request, response) => {
     const controller = new ProprietarioController();
     return response.send(await controller.get(request.params));
});

router.post("/proprietario", async (request, response) => {
     const controller = new ProprietarioController();
     return response.send(await controller.save(request.body));
});

router.put("/proprietario", async (request, response) => {
     const controller = new ProprietarioController();
     return response.send(await controller.update(request.body));
});

router.delete("/proprietario", async (request, response) => {
     const controller = new ProprietarioController();
     return response.send(await controller.remove(request.body));
});

//** Animal

router.get("/animal", async (request, response) => {
     const controller = new AnimalController();
     return response.send(await controller.getAll());
});

router.get("/animal/:id", async (request, response) => {
     const controller = new AnimalController();
     return response.send(await controller.get(request.params));
});

router.get("/animal/proprietario/:id", async (request, response) => {
     const controller = new AnimalController();
     return response.send(await controller.getAnimaisProprietario(request.params));
});

router.post("/animal", async (request, response) => {
     const controller = new AnimalController();
     return response.send(await controller.save(request.body));
});

router.put("/animal", async (request, response) => {
     const controller = new AnimalController();
     return response.send(await controller.update(request.body));
});

router.delete("/animal", async (request, response) => {
     const controller = new AnimalController();
     return response.send(await controller.remove(request.body));
});

export { router };