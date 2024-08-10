import Servicio from '../servicio/carritos.js'


class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    obtenerCarritos = async (req, res) => {
        try {
            const carritos = await this.servicio.obtenerCarritos()
            res.json(carritos)
        }
        catch(error) {
            res.status(500).json({errMsg: error.message})
        }
    }

    guardarCarrito = async (req, res) => {
        try {
            const pedido = req.body
            if(!Object.keys(pedido).length) throw new Error('ERROR: No puedo incorporar un pedido vacío')
                console.log(pedido)
            const pedidoGuardado = await this.servicio.guardarCarrito(pedido)
            res.json(pedidoGuardado)
        }
        catch(error) {
            res.status(500).json({errMsg: error.message})
        }
    }

    
}

export default Controlador