import connectionDB from "../../DB.js";
import { ProductModel } from "../models/producto.js";

class ModelMongoDB {

    getProductos = async () => {
        if (!connectionDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB');
        const productos = await ProductModel.find({});
        return productos;
    }

    getProducto = async id => {
        if (!connectionDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB');
        const producto = await ProductModel.findOne({ _id: id });
        return producto;
    }

    addProducto = async producto => {
        if (!connectionDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB');

        const nuevoProducto = new ProductModel(producto); // Aquí está la corrección: usa 'nuevoProducto' como instancia
        const productoGuardado = await nuevoProducto.save();

        return productoGuardado;
    }

    updateProducto = async (id, producto) => {
        if (!connectionDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB');

        await ProductModel.updateOne(
            { _id: id },
            { $set: producto }
        );
        const productoActualizado = await this.getProducto(id);
        return productoActualizado;
    }

    delProducto = async id => {
        if (!connectionDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB');

        const productoBorrado = await this.getProducto(id);
        await ProductModel.deleteOne({ _id: id });

        return productoBorrado;
    }
}

export default ModelMongoDB;
