import express from "express"
import 'dotenv/config'
import routerProductos from "./routers/productos.router.js"


const app = express()
const PORT = process.env.PORT


app.use('/api/productos', routerProductos)

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(PORT , () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`)
})