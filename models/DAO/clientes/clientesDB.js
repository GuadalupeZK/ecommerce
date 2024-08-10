import { ClientModel } from "../models/cliente.js"
import connectionDB from "../../DB.js"

class ModelMongoDB {

    getClientes = async () => {
        if (!connectionDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB')
        const clientes = await ClientModel.find({})
        return clientes
    }
    getCliente = async id => {
        if (!connectionDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB')
        const cliente = await ClientModel.findOne({ _id: id })
        return cliente
    }

    addCliente = async cliente => {
        if (!connectionDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB')
        const clienteModel = new ClientModel(cliente)
        const clienteGuardado = await clienteModel.save()
       
        return clienteGuardado
    }


    updateCliente = async (id, cliente) => {
        if (!connectionDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB')

        await ClientModel.updateOne(
            { _id: id },
            { $set: ClientModel }
        )
        const clienteUpdated = await this.getCliente(id)
        return clienteUpdated

    }
    delCliente = async id => {
        if (!connectionDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB')

        const clienteBorrado = await this.getCliente(id)
        await ClientModel.deleteOne({_id: id})
        return clienteBorrado
        
    }
}

export default ModelMongoDB