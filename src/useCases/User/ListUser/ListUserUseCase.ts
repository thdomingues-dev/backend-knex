import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class ListUserUseCase {
	constructor(
		private userRepository: IUsersRepository
	) {}

	async execute(data): Promise<{users: User[], totalCount: number}> {
		const totalCount = await this.userRepository.totalCount()
		const users = await this.userRepository.findAllUsers(data)

		return { users, totalCount }
	}
}
