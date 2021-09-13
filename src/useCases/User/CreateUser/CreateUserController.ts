import { User } from "../../../entities/User";
import { NextFunction, Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
	constructor(
		private createUserUseCase: CreateUserUseCase
	) {}

	async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
		const { name, email, document, birthDate, enabledFeatures, metadatas, address, salaryBase, created_at, updated_at, deleted_at } = request.body

		try {
			const user: User = await this.createUserUseCase.execute({ name, email, document, birthDate, enabledFeatures, metadatas, address, salaryBase, created_at, updated_at, deleted_at })

			return response.status(201).send(user)
		} catch (error) {
			next(error)
		}
	}
}
