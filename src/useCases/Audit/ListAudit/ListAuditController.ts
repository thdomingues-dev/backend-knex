import { Audit } from '../../../entities/Audit'
import { Request, Response, NextFunction } from 'express'
import { ListAuditsUseCase } from './ListAnalystUseCase'

export class ListAuditController {
	constructor(
		private listAuditUseCase: ListAuditsUseCase
	) {}

	async handle(_request: Request, response: Response, next: NextFunction): Promise<Response> {
		try {
			const audits: Audit[] = await this.listAuditUseCase.execute()

			return response.status(200).send(audits)
		} catch (error) {
			next(error)
			return response.status(400).json({ message: error?.message })
		}
	}
}
