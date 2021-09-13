import { PostgresUsersRepository } from "../../../repositories/implementations/PostgresUsersRepository";
import { MailtrapMailProvider } from "../../../providers/implementations/MailtrapMailProvider";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { DeleteUserController } from "./DeleUserController";

const mailtrapProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const deleteUserUseCase = new DeleteUserUseCase(postgresUsersRepository, mailtrapProvider)

const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserUseCase, deleteUserController }
