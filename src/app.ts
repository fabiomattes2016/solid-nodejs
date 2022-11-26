import "reflect-metadata";
import cors from "cors";
import express from "express";
import { usuarioRoute } from "./routes/UserRoutes";
import { ColorsTerminal } from "./colorsTerminal";
import { ConnectionPostgres } from "./infra/database/connection";

export class App {
  private express: express.Application;
  private port = 3333;

  constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
    this.listen();
  }

  public getApp(): express.Application {
    return this.express;
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private listen(): void {
    this.express.listen(this.port, () => {
      console.info(
        ColorsTerminal.foreground.FgGreen,
        `=> Servidor rodando na porta ${String(this.port)}`
      );
    });
  }

  private database(): void {
    const connectionPostgres = new ConnectionPostgres();
    connectionPostgres.connect();
  }

  private routes(): void {
    this.express.use("/users", usuarioRoute);
  }
}
