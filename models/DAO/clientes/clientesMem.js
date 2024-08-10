class ModelMem {

    constructor() {
        this.clientes = []
    }

    getClientes = async () => this.clientes
    
    getCliente = async id => {
        const cliente = this.clientes.find(cliente => cliente.id === id)
        return cliente || {}
    }

    addCliente = async cliente => {
        cliente.id = String(+(this.clientes[this.clientes.length - 1]?.id || 0) + 1)

        this.clientes.push(cliente)
        return cliente
    }

    updateCliente = async (id, cliente) => {
        cliente.id = id

        const index = this.clientes.findIndex(p => p.id === id)
        const clienteAnt = this.clientes[index]
        const clienteNuevo = { ...clienteAnt, ...cliente }

        this.clientes.splice(index, 1, clienteNuevo)
        return clienteNuevo
    }

    delCliente = async id => {
        let clienteEliminado = {}

        const index = this.clientes.findIndex(p => p.id === id)

        if (index != -1) {
            clienteEliminado = this.clientes.splice(index, 1)[0]
        }
        return clienteEliminado
    }
}

export default ModelMem