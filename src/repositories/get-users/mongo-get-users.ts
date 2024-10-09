import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Airton",
        lastName: "Cordeiro",
        email: "airton.acds@gmail.com",
        password: "123",
      },
    ];
  }
}
