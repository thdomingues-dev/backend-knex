import { ICardsRepository } from "../../../repositories/ICardsRepository";

export class UpdateCardUseCase {
	constructor(
		private cardRepository: ICardsRepository
	) {}

	async execute(data): Promise<any> {
		const hasCard = await this.cardRepository.findById(data?.id)

		if (Object.keys(hasCard).length === 0) {
			throw new Error('Card does not exists.')
		}

		return await this.cardRepository.update(data)
	}
}
