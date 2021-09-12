import { Audit } from "../entities/Audit"

export interface IAuditsRepository {
	findAllAudits(): Promise<Audit[]>
}
