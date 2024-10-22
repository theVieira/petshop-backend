import { randomUUID } from 'crypto'
import { CreatePetProps, PetProps } from './PetProps'

export class Pet {
	age: number
	readonly id: string
	name: string
	photo: string

	private constructor({ age, id, name, photo }: PetProps) {
		this.age = age
		this.id = id
		this.name = name
		this.photo = photo
	}

	static create({ age, name, photo }: CreatePetProps): Pet {
		if (name.length > 50) throw new Error('name over char limit max(50)')

		const id: string = randomUUID()

		const formattedName: string = name
			.split(' ')
			.map((el) => el.charAt(0).toUpperCase() + el.substring(1))
			.join(' ')

		return new Pet({ id, age: Math.floor(age), name: formattedName, photo })
	}
}
