import { User } from "../../../entity/User";
import { PostgresDataSource } from "../../../infra/database/PostgresDataSource";
import { IUsersRepository } from "../interfaces/IUsersRepository";

export class PostgresUsersRepositories implements IUsersRepository {
  private repository = PostgresDataSource.getRepository(User);

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email: email });
    return user;
  }

  async save(user: User): Promise<void> {
    await this.repository.save({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }
}
