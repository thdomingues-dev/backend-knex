import { Card } from "../../entities/Card";
import { Request, response, Response } from 'express'
import { CreateCardUseCase } from './CreateCardUseCase'

export class CreateCardController {
	constructor(
		private createCardUseCase: CreateCardUseCase
	) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { user_id, metadatas, status, created_at, updated_at } = request.body

		try {
			const card: Card = await this.createCardUseCase.execute({ user_id, metadatas, status, created_at, updated_at })

			return response.status(201).send(card)
		} catch (error) {
			console.error(error)
			return response.status(400).json({ message: error?.message})
		}
	}
}
