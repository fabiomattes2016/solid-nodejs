import { Router } from "express";
import { createUserController } from "../useCases/CreateUser";

const usuarioRoute = Router();

usuarioRoute.post("/", (req, res) => {
  return createUserController.handle(req, res);
});

export { usuarioRoute };
