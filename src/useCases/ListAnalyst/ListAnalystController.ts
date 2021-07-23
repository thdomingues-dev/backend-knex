import { Analyst } from '../../entities/Analyst'
import { Request, Response } from 'express'
import { ListAnalystUseCase } from './ListAnalystUseCase'

export class ListAnalystController {
	constructor(
		private listAnalystUseCase: ListAnalystUseCase
	) {}

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const analysts: Analyst[] = await this.listAnalystUseCase.execute()

			return response.status(201).send(analysts)
		} catch (error) {
			console.error(error)
			return response.status(400).json({ message: error?.message })
		}
	}
}
