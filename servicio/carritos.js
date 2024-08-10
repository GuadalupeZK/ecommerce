import ModelFactory from '../models/DAO/carritos/carritoFactory.js'
import config from '../config.js'


class Servicio {

    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerCarritos = async _ => {
        return await this.model.obtenerCarritos()
    }

    guardarCarrito = async pedido => {
        const pedidoGuardado = await this.model.guardarCarrito(pedido)
        return pedidoGuardado
    }

}

export default Servicio