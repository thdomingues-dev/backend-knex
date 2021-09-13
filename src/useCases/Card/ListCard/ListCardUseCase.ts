import { Card } from "../../../entities/Card";
import { ICardsRepository } from "../../../repositories/ICardsRepository";

export class ListCardUseCase {
	constructor(
		private cardRepository: ICardsRepository
	) {}

	async execute(): Promise<Card[]> {
		return await this.cardRepository.findAllCards()
	}
}
