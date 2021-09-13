import { Analyst } from "../../entities/Analyst";
import { IAnalystsRepository } from "../IAnalystsRepository";
import knex from '../../database'
const bcrypt = require('bcryptjs')

export class PostgresAnalystsRepository implements IAnalystsRepository {
	private analysts: Analyst[] = []

	async findByEmail(email: string): Promise<Analyst> {
		return await knex('analysts').where({ 'analysts.email': email })
	}

	async findAllAnalysts(): Promise<Analyst[]> {
		return await knex('analysts')
	}

	async save(analyst: Analyst): Promise<void> {
		const hashPassword = await bcrypt.hash(analyst.password, 10)

		return await knex('analysts').insert({
			user_id: analyst.user_id,
			email: analyst.email,
			password: hashPassword,
			roles: analyst.roles
		})
	}
}
