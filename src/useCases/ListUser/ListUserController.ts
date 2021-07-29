import { User } from "../../entities/User";
import { Request, Response, NextFunction } from 'express'
import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserController {
	constructor(
		private listUserUseCase: ListUserUseCase
	) {}

	async handle(_request: Request, response: Response, next: NextFunction): Promise<Response> {
		try {
			const users: User[] = await this.listUserUseCase.execute()

			return response.status(201).send(users)
		} catch (error) {
			next(error)
			return response.status(400).json({ message: error?.message })
		}
	}
}
