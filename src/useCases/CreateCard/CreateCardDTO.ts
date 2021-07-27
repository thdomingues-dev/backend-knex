export type CardMetadatas = {
	name: string
	digits: number
	limit: number
}

export interface ICreateCardRequestDTO {
	user_id: number
	metadatas: CardMetadatas
	status: string
	created_at: string
	updated_at: string
}
