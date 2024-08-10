import connectionDB from "../../DB.js"
import { CarritoModel } from "../models/carrito.js"


class ModelMongoDB {

    obtenerCarritos = async () => {
        if(!connectionDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB')
        const carritos = await PedidoModel.find({})
        return carritos
    }
    
    guardarCarrito = async carrito => {
        if(!connectionDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB')

        const carritoModel = new CarritoModel(carrito)
        const carritoGuardado = await carritoModel.save()
        return carritoGuardado
    }
}

export default ModelMongoDB