import { Router } from "express";
import ProprietarioController from "./useCase/proprietario/ProprietarioController";

const router: Router = Router();

//Route
router.get("/proprietarios", async (request, response) => {
     const controller = new ProprietarioController();
     return response.send(await controller.getAll());
});

export { router };