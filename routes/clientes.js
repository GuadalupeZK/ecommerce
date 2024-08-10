import express from 'express'

import Controlador from '../controlador/clientes.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    config() {
        this.router.get('/:id?', this.controlador.getClientes )
        this.router.post('/', this.controlador.addCliente )
        this.router.put('/:id', this.controlador.updateCliente )
        this.router.delete('/:id', this.controlador.delCliente )
        return this.router
    }
}

export default Router
