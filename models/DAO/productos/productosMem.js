class ModelMem {

    constructor() {
        this.productos = [ {
            nombre: "Pants",
            precio: "227.00",
            stock: 0,
            marca: "Grocery",
            categoria: "Bespoke Granite Computer",
            detalles: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
            foto: "https://loremflickr.com/640/480/sports",
            envio: false,
            id: "1"
        },
        {
            nombre: "Chair",
            precio: "766.00",
            stock: 78,
            marca: "Automotive",
            categoria: "Rustic Cotton Bike",
            detalles: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
            foto: "https://loremflickr.com/640/480/sports",
            envio: false,
            id: "2"
        },
        {
            nombre: "Shoes",
            precio: "981.00",
            stock: 39,
            marca: "Outdoors",
            categoria: "Handmade Steel Sausages",
            detalles: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
            foto: "https://loremflickr.com/640/480/food",
            envio: false,
            id: "3"
        }]
    }

    getProductos = async () => this.productos
    
    getProducto = async id => {
        const producto = this.productos.find(producto => producto.id === id)
        return producto || {}
    }

    addProducto = async producto => {
        producto.id = String(+(this.productos[this.productos.length - 1]?.id || 0) + 1)

        this.productos.push(producto)
        return producto
    }

    updateProductos = async (id, producto) => {
        producto.id = id

        const index = this.productos.findIndex(p => p.id === id)
        const productoAnt = this.productos[index]
        const productoNuevo = { ...productoAnt, ...producto }

        this.clientes.splice(index, 1, productoNuevo)
        return productoNuevo
    }

    delpPoducto = async id => {
        let productoEliminado = {}

        const index = this.productos.findIndex(p => p.id === id)

        if (index != -1) {
            productoEliminado = this.productos.splice(index, 1)[0]
        }
        return productoEliminado
    }
}
export default ModelMem