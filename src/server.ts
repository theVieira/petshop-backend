import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { router } from './router'
import photoConf from './configs/photo.conf'

const app = express()

app.use(cors())
app.use(express.json())

app.use(router)

app.use('/photos', express.static(photoConf.path))

mongoose
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	.connect(process.env.MONGO_URL)
	.then(() => console.log('Database Connected'))
	.catch((error) => console.error('Database Connection Error', error))

app.listen(process.env.PORT, () => console.log('Server Running'))
