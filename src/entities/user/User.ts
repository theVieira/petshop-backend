import { randomUUID } from 'crypto'

export class User {
	private constructor() {}

	static create(): User {
		const id: string = randomUUID()

		return new User()
	}
}
