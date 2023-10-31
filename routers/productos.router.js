import express from 'express'

const routerProductos = express.Router()

routerProductos.get('/:id?', (req, res) => {
    res.send ('GET ALL / ONE (READ)')
})

routerProductos.post('/', (req, res) => {
    res.send ('POST (CREATE)')
})

routerProductos.put('/:id', (req, res) => {
    res.send ('PUT (UPDATE)')
})

routerProductos.delete('/:id', (req, res) => {
    res.send ('DELETE (DELETE)')
})

export default routerProductos
