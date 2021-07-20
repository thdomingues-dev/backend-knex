import { Analyst } from "../../entities/Analyst";
import { IAnalystsRepository } from "../IAnalystsRepository";

export class PostgresAnalystsRepository implements IAnalystsRepository {
	private analysts: Analyst[] = []

	async findByEmail(email: string): Promise<Analyst> {
		const analyst = this.analysts.find(analyst => analyst.email === email)

		return analyst
	}

	async save(analyst: Analyst): Promise<void> {
		this.analysts.push(analyst)
	}
}
