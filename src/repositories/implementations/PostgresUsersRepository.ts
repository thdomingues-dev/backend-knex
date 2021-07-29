import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import knex from "../../database";

export class PostgresUsersRepository implements IUsersRepository {
	async findAllUsers(): Promise<User[]> {
		return await knex('users')
	}
}
