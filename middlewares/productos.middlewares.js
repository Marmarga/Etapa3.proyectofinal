import { validationResult } from "express-validator"


const productoMiddleware = (res, req, next) => {
    const errores = validationResult (req)
    if ( !errores.isEmpty()) {
        return res.status (400).json({errores: errores.array()})
    }
    next()

}

export default productoMiddleware