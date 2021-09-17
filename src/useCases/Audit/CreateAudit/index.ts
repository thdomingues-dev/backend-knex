import { PostgresAuditsRepository } from "../../../repositories/implementations/PostgresAuditsRepository";
import { CreateAuditUseCase } from "./CreateAuditUseCase";
import { CreateAuditController } from "./CreateAuditController";

const postgresAuditsRepository = new PostgresAuditsRepository()

const createAuditUseCase = new CreateAuditUseCase(postgresAuditsRepository)

const createAuditController = new CreateAuditController(createAuditUseCase)

export { createAuditUseCase, createAuditController }
