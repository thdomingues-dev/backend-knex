import { Audit } from "../../../entities/Audit"
import { IAuditsRepository } from "../../../repositories/IAuditsRepository"

export class ListAuditsUseCase {
	constructor(
		private auditRepository: IAuditsRepository
	) {}

	async execute(): Promise<Audit[]> {
		return await this.auditRepository.findAllAudits()
	}
}
