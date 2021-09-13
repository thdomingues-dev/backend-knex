import { PostgresCardsRepository } from "../../../repositories/implementations/PostgresCardsRepository";
import { ListCardUseCase } from "./ListCardUseCase";
import { ListCardController } from "./ListCardController";

const postgresCardsRepository = new PostgresCardsRepository()

const listCardUseCase = new ListCardUseCase(postgresCardsRepository)

const listCardController = new ListCardController(listCardUseCase)

export { listCardUseCase, listCardController }
