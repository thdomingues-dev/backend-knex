import { PostgresAnalystsRepository } from "../../../repositories/implementations/PostgresAnalystsRepository";
import { ListAnalystController } from "./ListAnalystController";
import { ListAnalystUseCase } from "./ListAnalystUseCase";

const postgresAnalystsRepository = new PostgresAnalystsRepository()

const listAnalystUseCase = new ListAnalystUseCase(postgresAnalystsRepository)

const listAnalystController = new ListAnalystController(listAnalystUseCase)

export { listAnalystUseCase, listAnalystController}
