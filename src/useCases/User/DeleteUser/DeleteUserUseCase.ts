import { User } from "../../../entities/User";
import { IMailProvider } from "../../../providers/IMailProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class DeleteUserUseCase {
	constructor(
		private usersRepository: IUsersRepository,
		private mailProvider: IMailProvider
	) {}

	async execute(data): Promise<User> {
		const hasUser = await this.usersRepository.findById(data?.id)

		if (Object.keys(hasUser).length === 0) {
			throw new Error('User does not exists.')
		}

		const user = new User(data)

		return await this.usersRepository.delete(user)
	}
}
