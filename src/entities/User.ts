export class User {
	public readonly id: number

	public name: string
	public email: string
	public document: string
	public birthDate: string
	public enabledFeatures: number[]
	public metadatas: {
		validDocument: boolean
		verified: boolean
	}
	public address: {
		city: string
		state: string
		postalCode: string
		streetNumber: number
	}
	public salaryBase: number
	public created_at: string
	public updated_at: string
	public deleted_at: string | null
}
