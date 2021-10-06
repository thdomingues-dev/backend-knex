import { Analyst } from '../../../entities/Analyst'
import { Request, Response, NextFunction } from 'express'
import { ListAnalystUseCase } from './ListAnalystUseCase'

export class ListAnalystController {
	constructor(
		private listAnalystUseCase: ListAnalystUseCase
	) {}

	async handle(_request: Request, response: Response, next: NextFunction): Promise<Response> {
		try {
			const analysts: Analyst[] = await this.listAnalystUseCase.execute()

			return response.status(200).send(analysts)
		} catch (error) {
			next(error)
			return response.status(400).json({ message: error?.message })
		}
	}
}
