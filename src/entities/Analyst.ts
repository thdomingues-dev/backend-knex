import { uuid } from "uuidv4"

export class Analyst {
	public readonly id: string

	public user_id: number
	public email: string
	public password: string
	public roles: string[]
	public created_at: string
	public updated_at: string

	constructor(props: Omit<Analyst, 'id'>, id?: string) {
		Object.assign(this, props)

		if (!id) {
			this.id = uuid()
		}
	}
}
