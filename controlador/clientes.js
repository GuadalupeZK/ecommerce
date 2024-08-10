import Servicio from '../servicio/clientes.js'


class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

  
    getClientes = async (req, res) => {
        try {
            const { id } = req.params
            const clientes = await this.servicio.getClientes(id)
            res.json(clientes)
        }
        catch(error) {
            res.status(500).json({errMsg: error.message})
        }
    }
    updateCliente = async (req, res) => {
        try {
            const { id } = req.params
            const cliente = req.body
            const clienteActualizado = await this.servicio.updateCliente(id, cliente)
            res.json(clienteActualizado)
        }
        catch(error) {
            res.status(500).json({errMsg: error.message})
        }
    }

    addCliente = async (req, res) => {
        try {
            const cliente = req.body
            if(!Object.keys(cliente).length) throw new Error('ERROR: No puedo incorporar un cliente vacío')
            const clienteGuardado = await this.servicio.addCliente(cliente)
            res.json(clienteGuardado)
        }
        catch(error) {
            res.status(500).json({errMsgAddCliente: error.message})
        }
    }
    delCliente = async (req, res) => {
        try {
            const { id } = req.params
            const clienteEliminado = await this.servicio.delCliente(id)
            res.json(clienteEliminado)
        }
        catch(error) {
            res.status(500).json({errMsg: error.message})
        }
    }
}

export default Controlador