export interface ICreateUserRequestDTO {
	name: string
	email: string
	document: string
	enabledFeatures: Array<number>
	metadatas: {
		validDocument: boolean
		verified: boolean
	},
	address: {
		city: string
		state: string
		postalCode: string
		streetNumber: number
	},
	salaryBase: number
	birthDate: string
	created_at: string
	updated_at: string
	deleted_at: string
}
