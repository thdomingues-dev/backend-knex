import { Card } from "../../entities/Card";
import { ICardsRepository } from "../ICardsRepository";
import knex from "../../database";

export class PostgresCardsRepository implements ICardsRepository {
	async findAllCards(): Promise<Card[]> {
		return await knex('cards')
	}

	async findById(id: number): Promise<Card[]> {
		return await knex('cards').where({ 'cards.id': id })
	}

	async update(payload: any): Promise<Card> {
		if (payload?.name) {
			return await knex('cards').update({ name: payload?.name }).where({ id: payload?.id })
		}

		if (payload?.status) {
			return await knex('cards').update({ status: payload?.status }).where({ id: payload?.id })
		}
	}

	async save(card: Card): Promise<Card> {
		return await knex('cards').returning('*').insert(card)
	}

	async exists (id: number): Promise<boolean> {
		const result = await this.findById(id)
		if (result.length !== 0 && result[0].id === id) return true

		return false
	}
}
