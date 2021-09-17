import { Audit } from "../../../entities/Audit";
import { NextFunction, Request, Response } from "express";
import { CreateAuditUseCase } from "./CreateAuditUseCase";

export class CreateAuditController {
	constructor(
		private createAuditUseCase: CreateAuditUseCase
	) {}

	async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
		const { analyst_id, type, before, after, created_at } = request.body

		try {
			const audit: Audit = await this.createAuditUseCase.execute({ analyst_id, type, before, after, created_at })

			return response.status(201).send(audit)
		} catch (error) {
			next(error)
		}
	}
}
