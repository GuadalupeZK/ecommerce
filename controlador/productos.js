import Servicio from '../servicio/productos.js'


class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }


    getProductos = async (req, res) => {
        try {
            const { id } = req.params
            const productos = await this.servicio.getProductos(id)
            res.json(productos)
        }
        catch(error) {
            res.status(500).json({errMsggetproductos: error.message})
        }
    }
    addProducto = async (req, res) => {
        try {
            const producto = req.body
            if(!Object.keys(producto).length) throw new Error('ERROR: No puedo incorporar un producto vacío')
                
            const productoGuardado = await this.servicio.addProducto(producto)
            res.json(productoGuardado)
        }
        catch(error) {
            res.status(500).json({errMsg: error.message})
        }
    }
    updateProducto = async (req, res) => {
        try {
            const { id } = req.params
            const producto = req.body
            const productoctualizado = await this.servicio.updateProducto(id, producto)
            res.json(productoctualizado)
        }
        catch(error) {
            res.status(500).json({errMsg: error.message})
        }
    }
    delProducto = async (req, res) => {
        try {
            const { id } = req.params
            const productoEliminado = await this.servicio.delProducto(id)
            res.json(productoEliminado)
        }
        catch(error) {
            res.status(500).json({errMsg: error.message})
        }
    }
}

export default Controlador