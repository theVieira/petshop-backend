import mongoose from 'mongoose'

const PetSchema = new mongoose.Schema({
	id: String,
	name: String,
	age: Number,
	photo: String,
})

const PetModel = mongoose.model('PetModel', PetSchema)

export { PetModel }
