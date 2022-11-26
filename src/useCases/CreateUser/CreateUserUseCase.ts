import { User } from "../../entity/User";
import { IMailProvider } from "../../providers/Mail/interfaces/IMailProvider";
import { IUsersRepository } from "../../repositories/Users/interfaces/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = new User(data);

    await this.usersRepository.save(user);
    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe do App",
        email: "equipe@app.com",
      },
      subject: "Seja bem vindo a plataforma",
      body: "<p>Você já pode fazer login em nossa plataforma.</p>",
    });

    return user;
  }
}
