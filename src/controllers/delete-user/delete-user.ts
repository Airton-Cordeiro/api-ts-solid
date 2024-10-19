import { HttpRequest } from "../protocols";

export class DeleteUserController implements IDeleteUserController {
  constructor(private readonly deleteUserController: IDeleteUserRepository) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>> {}
}
