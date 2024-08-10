class ModelMem {

    constructor() {
        this.carritos = []
    }

    obtenerCarritos = async () => this.carritos
    
    guardarCarrito = async carrito => {
        carrito.id = String(+(this.carritos[this.carritos.length - 1]?.id || 0) + 1)

        this.carritos.push(pedido)
        return pedido
    }
}

export default ModelMem