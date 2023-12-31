import express from 'express'
import controller from '../controllers/productos.controller.js'
import validator from '../validators/productos.validator.js'

const routerProductos = express.Router()

routerProductos.get('/:id?', controller.obtenerProductos)

routerProductos.post('/', validator.productoCreateValidator,controller.guardarProducto )

routerProductos.put('/:id', validator.productoUpdapeValidator, controller.actualizarProducto )

routerProductos.delete('/:id', validator.productoDeleteValidator,controller.borrarProducto )

export default routerProductos
