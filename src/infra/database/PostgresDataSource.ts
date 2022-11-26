import { DataSource } from "typeorm";
import { User } from "../../entity/User";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "191.101.70.50",
  port: 5432,
  username: "postgres",
  password: "Fabio1982Mattes",
  database: "nodets",
  logging: true,
  migrations: ["src/infra/database/migrations/*.ts"],
  entities: ["src/entity/*.ts"],
});
