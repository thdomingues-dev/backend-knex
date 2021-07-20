import { Request, Response } from "express";
import { CreateAnalystUseCase } from "./CreateAnalystUseCase";

export class CreateAnalystController {
	constructor(
		private createAnalystUseCase: CreateAnalystUseCase
	) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { user_id, email, password, roles, created_at, updated_at } = request.body

		try {
			await this.createAnalystUseCase.execute({ user_id, email, password, roles, created_at, updated_at })

			return response.status(201).send()
		} catch (error) {
			console.error(error)
			return response.status(400).json({ message: error?.message })
		}
	}
}
