import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresAnalystsRepository } from "../../repositories/implementations/PostgresAnalystsRepository";
import { CreateAnalystController } from "./CreateAnalystController";
import { CreateAnalystUseCase } from "./CreateAnalystUseCase";

const mailtrapProvider = new MailtrapMailProvider()
const postgresAnalystsRepository = new PostgresAnalystsRepository()

const createAnalystUseCase = new CreateAnalystUseCase(postgresAnalystsRepository, mailtrapProvider)

const createAnalystController = new CreateAnalystController(createAnalystUseCase)

export { createAnalystUseCase, createAnalystController }
