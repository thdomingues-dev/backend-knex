export interface ICreateAnalystRequestDTO {
	user_id: number
	email: string
	password: string
	roles: string[]
	created_at: string
	updated_at: string
}
