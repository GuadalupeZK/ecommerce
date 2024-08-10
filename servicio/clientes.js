import ModelFactory from '../models/DAO/clientes/clientesFactory.js'
import config from '../config.js'

import validar from './validaciones/cliente.js'


class Servicio {

    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    getClientes = async id => {
        if(id) return await this.model.getCliente(id)
        else return await this.model.getClientes()
    }

    addCliente = async cliente => {
        const error = validar(cliente)
        if(error) throw new Error(`Error de formato en campos del cliente: ${error.details[0].message}`)
        const clienteGuardado = await this.model.addCliente(cliente)
        return clienteGuardado
    }

    updateCliente = async (id, cliente) => {
        const clienteActualizado = await this.model.updateCliente(id,cliente)
        return clienteActualizado
    }

    delCliente = async id => {
        const clienteEliminado = await this.model.delCliente(id)
        return clienteEliminado
    }
}

export default Servicio