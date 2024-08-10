import ModelFactory from '../models/DAO/productos/productosFactory.js'
import config from '../config.js'

import validar from './validaciones/producto.js'


class Servicio {

    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    getProductos = async id => {
        if(id) return await this.model.getProducto(id)
        else return await this.model.getProductos()
    }

    addProducto = async producto => {
        const error = validar(producto)
        if(error) throw new Error(`Error de formato en campos del producto: ${error.details[0].message}`)
        const productoGuardado = await this.model.addProducto(producto)
        return productoGuardado
    }

    updateProducto = async (id, producto) => {
        const productoActualizado = await this.model.updateProducto(id,producto)
        return productoActualizado
    }

    delProducto = async id => {
        const productoEliminado = await this.model.delProducto(id)
        return productoEliminado
    }
}

export default Servicio