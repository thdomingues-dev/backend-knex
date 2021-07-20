import { Analyst } from "../../entities/Analyst";
import { IMailProvider } from "../../providers/IMailProvider";
import { IAnalystsRepository } from "../../repositories/IAnalystsRepository";
import { ICreateAnalystRequestDTO } from "./CreateAnalystDTO";

//SRP - single responsibility principle

export class CreateAnalystUseCase {
	constructor(
		private analystsRepository: IAnalystsRepository, //LSP - liskov substitution principle
		private mailProvider: IMailProvider
	) {}

	async execute(data: ICreateAnalystRequestDTO) {
		const analystAlreadyExists = await this.analystsRepository.findByEmail(data.email)

		if (analystAlreadyExists) {
			throw new Error('Analyst already exists.')
		}

		const analyst = new Analyst(data)

		await this.analystsRepository.save(analyst) // DIP - dependency inversion principle

		await this.mailProvider.sendMail({
			to: {
				name: data.email,
				email: data.email
			},
			from: {
				name: 'Teste',
				email: 'equipe@gmail.com'
			},
			subject: 'Welcome!',
			body: '<span>Você já pode fazer login no nosso sistema</span>'
		})
	}
}
