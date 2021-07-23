import { Analyst } from "../../entities/Analyst";
import { IAnalystsRepository } from "../../repositories/IAnalystsRepository";
import { IListAnalystResponseDTO } from "./ListAnalystDTO";

export class ListAnalystUseCase {
	constructor(
		private analystRepository: IAnalystsRepository
	) {}

	async execute(): Promise<Analyst[]> {
		return await this.analystRepository.findAllAnalysts()
	}
}
