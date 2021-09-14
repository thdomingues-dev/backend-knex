import { PostgresCardsRepository } from "../../../repositories/implementations/PostgresCardsRepository";
import { UpdateCardUseCase } from "./UpdateCardUseCase";
import { UpdateCardController } from "./UpdateCardController";

const postgresCardsRepository = new PostgresCardsRepository()

const updateCardUseCase = new UpdateCardUseCase(postgresCardsRepository)

const updateCardController = new UpdateCardController(updateCardUseCase)

export { updateCardUseCase, updateCardController }
