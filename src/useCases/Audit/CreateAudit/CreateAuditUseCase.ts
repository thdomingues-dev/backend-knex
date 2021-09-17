import { Audit } from "../../../entities/Audit";
import { IAuditsRepository } from "../../../repositories/IAuditsRepository";
import { ICreateAuditRequestDTO } from "./CreateAuditDTO";

export class CreateAuditUseCase {
	constructor(
		private auditsRepository: IAuditsRepository
	) {}

	async execute(data: ICreateAuditRequestDTO): Promise<Audit> {
		const audit = new Audit(data)

		return await this.auditsRepository.save(audit)
	}
}