export class Audit {
	public readonly id: number

	public type: string
	public before: {
		status: string
	} | any
	public after: {
		status: string
	} | any
	created_at: string

	constructor(props: Omit<Audit, 'id'>) {
		Object.assign(this, props)
	}
}
