import { MailTrapMailProvider } from "../../providers/Mail/implementations/MailTrapMailProvider";
import { PostgresUsersRepositories } from "../../repositories/Users/implementations/PostgresUsersRepositories";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapProvider = new MailTrapMailProvider();
const postgresUsersRepositories = new PostgresUsersRepositories();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepositories,
  mailTrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
