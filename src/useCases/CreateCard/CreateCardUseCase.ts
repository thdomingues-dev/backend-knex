import { Card } from "../../entities/Card";
import { ICardsRepository } from "../../repositories/ICardsRepository";
import { ICreateCardRequestDTO } from "./CreateCardDTO";

export class CreateCardUseCase {
	constructor(
		private cardsRepository: ICardsRepository
	) {}

	async execute(data: ICreateCardRequestDTO): Promise<Card> {
		const card = new Card(data)

		return await this.cardsRepository.save(card)
	}
}
