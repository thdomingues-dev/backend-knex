import { NextFunction, Request, Response } from "express";
import { UpdateCardUseCase } from "./UpdateCardUseCase";

export class UpdateCardController {
	constructor(
		private updateCardUseCase: UpdateCardUseCase
	) {}

	async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
		const { id } = request.params
		const { name, status } = request.body

		try {
			name ? await this.updateCardUseCase.execute({ id, name}) : null
			status ? await this.updateCardUseCase.execute({ id, status}) : null

			if (name || status) return response.status(200).send({ message: 'card has been updated.'})

			return response.status(400).json({ message: "bad request, try again" })
		} catch (error) {
			next(error)
		}
	}
}
