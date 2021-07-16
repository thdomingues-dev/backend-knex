import { Analyst } from "../../entities/Analyst";
import { IAnalystsRepository } from "../../repositories/IAnalystsRepository";
import { ICreateAnalystRequestDTO } from "./CreateAnalystDTO";

//SRP - single responsibility principle

export class CreateAnalystUseCase {
	constructor(
		private analystsRepository: IAnalystsRepository //LSP - liskov substitution principle
	) {}

	async execute(data: ICreateAnalystRequestDTO) {
		const analystAlreadyExists = await this.analystsRepository.findByEmail(data.email)

		if (analystAlreadyExists) {
			throw new Error('Analyst already exists.')
		}

		const analyst = new Analyst(data)

		await this.analystsRepository.save(analyst) // DIP - dependency inversion principle
	}
}
