import { User } from "../../../entities/User";
import { NextFunction, Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
	constructor(
		private deleteUserUseCase: DeleteUserUseCase
	) {}

	async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
		const { id } = request.params

		try {
			const user: User = await this.deleteUserUseCase.execute({ id })

			return response.status(200).send({ message: 'Usuário excluído com sucesso'})
		} catch (error) {
			next(error)
			return response.status(400).json({ message: error })
		}
	}
}
