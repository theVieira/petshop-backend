import { Request, Response } from 'express'
import { PetModel } from '../models/PetModel'
import z from 'zod'
import { Pet } from '../entities/pet/Pet'

export default {
	async create(req: Request, res: Response): Promise<void> {
		try {
			const createPetSchema = z.object({
				age: z.string(),
				name: z.string().max(50, { message: 'name over char limit max(50)' }),
			})

			const { age, name } = createPetSchema.parse(req.body)

			const photo: string = `${process.env.URL}/photos/${req.file?.filename}`

			const pet = Pet.create({ age: parseInt(age), name, photo })

			await PetModel.create({
				age: pet.age,
				name: pet.name,
				photo: pet.photo,
				id: pet.id,
			})

			res.sendStatus(201)
		} catch (error) {
			if (error instanceof Error) res.status(400).json({ error: error.message })

			return
		}
	},

	async list(req: Request, res: Response): Promise<void> {
		const list = await PetModel.find()

		res.status(200).json(list)

		return
	},
}
