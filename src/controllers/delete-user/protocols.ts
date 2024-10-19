import { User } from "../../models/user";

export interface IDeleteUserRepository {
  deleteUserController(id: string): Promise<User>;
}
