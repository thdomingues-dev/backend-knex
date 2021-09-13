import { Card } from "../../../entities/Card";
import { Request, Response, NextFunction } from 'express'
import { ListCardUseCase } from "./ListCardUseCase"

export class ListCardController {
	constructor(
		private listCardUseCase: ListCardUseCase
	) {}

	async handle(_request: Request, response: Response, next: NextFunction): Promise<Response> {
		try {
			const cards: Card[] = await this.listCardUseCase.execute()

			return response.status(201).send(cards)
		} catch (error) {
			next(error)
			return response.status(400).json({ message: error?.message })
		}
	}
}
