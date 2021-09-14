import { NextFunction, Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
	constructor(
		private updateUserUsecase: UpdateUserUseCase
	) {}

	async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
		const { id } = request.params
		const { name } = request.body

		try {
			await this.updateUserUsecase.execute({ id, name })

			return response.status(200).send({ message: 'User has been updated.'})
		} catch (error) {
			next(error)
		}
	}
}
