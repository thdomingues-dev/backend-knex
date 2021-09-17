export interface ICreateAuditRequestDTO {
	analyst_id: number
	type: string
	before: {
		status?: string
	}
	after: {
		status?: string
	}
	created_at: string
}