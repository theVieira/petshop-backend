export type PetProps = {
	readonly id: string
	name: string
	age: number
	photo: string
}

export type CreatePetProps = Omit<PetProps, 'id'>
