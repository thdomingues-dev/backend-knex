import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import knex from "../../database";

export class PostgresUsersRepository implements IUsersRepository {
	private users: User[] = []

	async findAllUsers({ page = 1 }): Promise<User[]> {
		return await knex('users').limit(10).offset((page - 1) * 10)
	}

	async findByEmail(email: string): Promise<User> {
		return await knex('users').where({ 'users.email': email })
	}

	async findById(id: number): Promise<User> {
		return await knex('users').where({ 'users.id': id })
	}

	async save(user: User): Promise<User> {
		return await knex('users').returning('*').insert({
			name: user.name,
			email: user.email,
			document: user.document,
			birthDate: user.birthDate,
			enabledFeatures: user.enabledFeatures,
			metadatas: user.metadatas,
			address: user.address,
			salaryBase: user.salaryBase
		})
	}

	async totalCount(): Promise<number> {
		const [response]  = await knex('users').count()

		return response?.count
	}

	async delete(user: User): Promise<User> {
		return await knex('users').where({ id: user.id }).del()
	}

	async update(payload: any): Promise<User> {
		return await knex('users').update({ name: payload?.name }).where({ id: payload?.id })
	}
}
