import { PostgresCardsRepository } from "../../../repositories/implementations/PostgresCardsRepository"
import { CreateCardController } from "./CreateCardController"
import { CreateCardUseCase } from "./CreateCardUseCase"

const postgresCardsRepository = new PostgresCardsRepository()

const createCardUseCase = new CreateCardUseCase(postgresCardsRepository)

const createCardController = new CreateCardController(createCardUseCase)

export { createCardUseCase, createCardController }
