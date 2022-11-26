import { ColorsTerminal } from "../../colorsTerminal";
import { PostgresDataSource } from "./PostgresDataSource";

class ConnectionPostgres {
  connect(): void {
    PostgresDataSource.initialize()
      .then(() => {
        console.log(
          ColorsTerminal.foreground.FgGreen,
          `=> Banco de dados inicializado!`
        );
      })
      .catch((err) => {
        console.error(
          ColorsTerminal.foreground.FgRed,
          `=> O seguinte erro ocorreu ao se conectar ao banco de dados =>`,
          err
        );
      });
  }
}

export { ConnectionPostgres };
