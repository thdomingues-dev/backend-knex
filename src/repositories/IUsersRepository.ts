import { User } from "../entities/User";

export interface IUsersRepository {
	findAllUsers(params: { page: number }): Promise<User[]>
	findByEmail(email: string): Promise<User>
	findById(id: number): Promise<User>
	save(user: User): Promise<User>
	delete(user: User): Promise<User>
	update(user: User): Promise<User>
	totalCount(): Promise<number>
}
