import mongoose from "mongoose";

const productosSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    detalles: String,
    foto: String,
    envio: Boolean
})

const productosModel = mongoose.model('productos', productosSchema)

const leerProducto = async (id) => {
    try {
        const producto = await productosModel.findById(id)
        return producto
    } catch (error) {
        console.log('[leerProducto]: No se pudo leer el producto con el id', error)
    }
}

const leerProductos = async () => {
    try {
        const productos = await productosModel.find({})
        return productos
    } catch (error) {
            console.log('[leerProductos]: Algo no salio bien')        
    }

}

const guardarProducto = async (productoNuevo) => {

    try {const productoAlmacenado = new productosModel(productoNuevo)
    await productoAlmacenado.save()

    return productoAlmacenado
        
    } catch (error) {
        console.log('Error (guardar productos), no se pudo guardar en la DB', error)
        
    }
}

const modificarProducto = async (id, productoAEditar) => {

    try {
        const productoModificado = await productosModel.findByIdAndUpdate(id, productoAEditar)
        return productoModificado 
    } catch (error) {
        console.log('Error[modificarProducto]: No se pudo actualizar el producto', error)
    }

}

const eliminarProducto = async (id) => {

    try { 
        const productoBorrado = await productosModel.findByIdAndDelete(id)
        return productoBorrado
        
    } catch (error) {
        console.log('Error al eliminar el producto en la DB', error)
        
    }

}

export default {
    leerProducto,
    leerProductos,
    guardarProducto,
    modificarProducto,
    eliminarProducto
}