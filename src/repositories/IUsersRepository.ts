import { User } from "../entities/User";

export interface IUsersRepository {
	findAllUsers(): Promise<User[]>
}
