import { Card } from "../../entities/Card";
import { ICardsRepository } from "../ICardsRepository";
import knex from "../../database";

export class PostgresCardsRepository implements ICardsRepository {
	private card: Card

	async save(card: Card): Promise<Card> {
		return await knex('cards').returning('*').insert(card)
	}
}