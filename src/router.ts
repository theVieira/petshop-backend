import { Router } from 'express'
import { upload } from './middlewares/multer'
import PetController from './controllers/PetController'

const router = Router()

router.post('/', upload.single('photo'), PetController.create)

router.get('/', PetController.list)

export { router }
