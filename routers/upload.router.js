import express from 'express'
import uploadController from '../controllers/upload.controller.js'
import uploadMiddleware from '../utils/handleStorage.js'


const routerUpload = express.Router()

routerUpload.post('/', uploadMiddleware.single('foto'),uploadController.uploadImagen)

export default routerUpload