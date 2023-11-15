import { check } from "express-validator";
import productoMiddleware from "../middlewares/productos.middlewares.js";


const productoDeleteValidator = [
    check('id')
    .isMongoId()
    .withMessage('Envio informacion icorrecta para el borrado'),
    productoMiddleware
]

const productoCreateValidator = [
    check('nombre')
    .notEmpty()
    .withMessage('El nombre es requerido')
    .trim(),
    productoMiddleware
]

export default {
    productoDeleteValidator,
    productoCreateValidator
}

//hacer el productoUpdapeValidator
//hacer el prodcutoReadOneValidator