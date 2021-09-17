export class Card {
	public readonly id: number
	public readonly digits: number

	public user_id: number
	public name: string

	public limit: number
	public status: string
	public created_at: string
	public updated_at: string


	constructor(props: Omit<Card, 'id' | 'digits'>) {
		Object.assign(this, props)
	}
}
