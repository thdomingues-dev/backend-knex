import { Analyst } from "../entities/Analyst";

export interface IAnalystsRepository {
	findByEmail(email: string): Promise<Analyst>
	save(analyst: Analyst): Promise<void>
}
