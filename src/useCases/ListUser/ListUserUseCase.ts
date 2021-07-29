import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class ListUserUseCase {
	constructor(
		private userRepository: IUsersRepository
	) {}

	async execute(): Promise<User[]> {
		return await this.userRepository.findAllUsers()
	}
}
