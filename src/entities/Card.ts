export class Card {
	public readonly id: number

	public user_id: number
	public metadatas: {
		name: string
		digits: number
		limit: number
	}
	public status: string
	public created_at: string
	public updated_at: string

	constructor(props: Omit<Card, 'id'>) {
		Object.assign(this, props)
	}
}
