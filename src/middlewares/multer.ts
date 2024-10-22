import multer, { StorageEngine } from 'multer'
import photoConf from '../configs/photo.conf'

const storage: StorageEngine = multer.diskStorage({
	destination(req, file, callback) {
		callback(null, photoConf.path)
	},

	filename(req, file, callback) {
		const fileId: number = Date.now()

		const filename = `${fileId}-${file.originalname}`

		callback(null, filename)
	},
})

const upload = multer({ storage })

export { upload }
