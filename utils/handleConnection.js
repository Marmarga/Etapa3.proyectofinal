import mongoose from "mongoose"

const handleConnection = async (uri) =>{
    try {
        await mongoose.connect(uri)
    console.log('Conexion a Mongo realizada con exito!')
    } catch (error) {
        console.log('Eror al conectar a Mongo DB' , error)
    }
    
}

export default handleConnection