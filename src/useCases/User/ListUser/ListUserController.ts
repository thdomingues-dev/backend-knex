import { User } from "../../../entities/User";
import { Request, Response, NextFunction } from 'express'
import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserController {
	constructor(
		private listUserUseCase: ListUserUseCase
	) {}

	async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
		const { page = 1 } = request.query

		try {
			const handleListUserUseCase = await this.listUserUseCase.execute({ page })

			response.header('X-Total-Count', handleListUserUseCase.totalCount.toString())

			return response.status(201).send(handleListUserUseCase.users)
		} catch (error) {
			next(error)
			return response.status(400).json({ message: error?.message })
		}
	}
}
