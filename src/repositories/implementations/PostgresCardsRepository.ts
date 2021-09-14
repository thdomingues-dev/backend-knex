import { Card } from "../../entities/Card";
import { ICardsRepository } from "../ICardsRepository";
import knex from "../../database";

export class PostgresCardsRepository implements ICardsRepository {
	private card: Card

	async findAllCards(): Promise<Card[]> {
		return await knex('cards')
	}

	async findById(id: number): Promise<Card[]> {
		return await knex('cards').where({ 'cards.id': id })
	}

	async update(payload: any): Promise<Card> {
		if (payload?.metadatas) {
			return await knex('cards').update({ metadatas: payload?.metadatas }).where({ id: payload?.id })
		}

		if (payload?.status) {
			return await knex('cards').update({ status: payload?.status }).where({ id: payload?.id })
		}
	}

	async save(card: Card): Promise<Card> {
		return await knex('cards').returning('*').insert(card)
	}
}
