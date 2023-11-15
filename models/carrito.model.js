import mongoose from "mongoose"


const carritoSchema = mongoose.Schema({
    carrito: Array
})


const carritoModel = mongoose.model('carritos', carritoSchema)


//----------------------------Crear Carrito-------------------

const crearCarrito = async (carrito) => {

    try {
        const carritoCrado = new carritoModel ({carrito})
        const carritoGuardado = await carritoCrado.save()

        return carritoGuardado
    } catch (error) {
        console.log('Error[crearCarrito]: Problemas al crear el carrito', error)
        
    }
}

export default{
    crearCarrito
}