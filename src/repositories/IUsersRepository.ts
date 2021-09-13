import { User } from "../entities/User";

export interface IUsersRepository {
	findAllUsers(): Promise<User[]>
	findByEmail(email: string): Promise<User>
	save(user: User): Promise<User>
}
