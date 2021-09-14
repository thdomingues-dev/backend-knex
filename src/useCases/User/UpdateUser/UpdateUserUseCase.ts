import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class UpdateUserUseCase {
	constructor(
		private userRepository: IUsersRepository,
	) {}

	async execute(data): Promise<User> {
		const hasUser = await this.userRepository.findById(data?.id)

		if (Object.keys(hasUser).length === 0) {
			throw new Error('User does not exists.')
		}

		const user = new User(data)

		return await this.userRepository.update(user)
	}
}
