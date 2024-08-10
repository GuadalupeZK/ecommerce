import express from 'express'

import Controlador from '../controlador/carrito.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    config() {
        this.router.get('/', this.controlador.obtenerCarritos )
        this.router.post('/', this.controlador.guardarCarrito )

        return this.router
    }
}

export default Router
