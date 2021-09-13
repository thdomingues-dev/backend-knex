import { User } from "../../../entities/User";
import { IMailProvider } from "../../../providers/IMailProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
	constructor(
		private usersRepository: IUsersRepository,
		private mailProvider: IMailProvider
	) {}

	async execute(data: ICreateUserRequestDTO): Promise<User> {
		const hasUser = await this.usersRepository.findByEmail(data.email)

		if (hasUser?.id) {
			throw new Error('User already exists.')
		}

		const user = new User(data)

		const handleSaveUser = await this.usersRepository.save(user)

		if (handleSaveUser) {
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
				body: `<span>Usuário ${user.name} criado com sucesso.</span>`
			})
		}

		return handleSaveUser
	}
}
