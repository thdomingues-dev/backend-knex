import { Audit } from "../../entities/Audit"
import { IAuditsRepository } from "../IAuditsRepository"
import knex from "../../database"

export class PostgresAuditsRepository implements IAuditsRepository {
	async findAllAudits(): Promise<Audit[]> {
		return await knex('audits')
	}
}
