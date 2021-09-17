import { Card } from "../../../entities/Card";
import { ICardsRepository } from "../../../repositories/ICardsRepository";
import { ICreateCardRequestDTO } from "./CreateCardDTO";

export class CreateCardUseCase {
	constructor(
		private cardsRepository: ICardsRepository
	) {}

	async execute(data: ICreateCardRequestDTO): Promise<Card> {
		const { user_id, name, limit, created_at, updated_at } = data
		const card = new Card({ status: 'new_card', user_id, name, limit, updated_at, created_at })

		return await this.cardsRepository.save(card)
	}
}
