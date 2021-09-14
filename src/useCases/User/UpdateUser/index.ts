import { PostgresUsersRepository } from "../../../repositories/implementations/PostgresUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const postgresUsersRepository = new PostgresUsersRepository()

const updateUserUsecase = new UpdateUserUseCase(postgresUsersRepository)

const updateUserController = new UpdateUserController(updateUserUsecase)

export { updateUserUsecase, updateUserController }
