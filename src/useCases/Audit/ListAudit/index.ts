import { PostgresAuditsRepository } from '../../../repositories/implementations/PostgresAuditsRepository'
import { ListAuditController } from './ListAuditController'
import { ListAuditsUseCase } from './ListAnalystUseCase'

const postgresAuditsRepository = new PostgresAuditsRepository()

const listAuditUseCase = new ListAuditsUseCase(postgresAuditsRepository)

const listAuditController = new ListAuditController(listAuditUseCase)

export { listAuditUseCase, listAuditController }
