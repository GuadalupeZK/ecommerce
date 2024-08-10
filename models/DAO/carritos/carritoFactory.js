import ModelMem from "./carritoMem.js";
import ModelMongoDB from "./carritoMongoDB.js";

class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                console.log('**** Pedidos Persistiendo en Memoria ****')
                return new ModelMem()

            case 'MONGODB':
                console.log('**** Pedidos Persistiendo en Database MongoDB ****')
                return new ModelMongoDB()

            default:
                console.log('**** Pedidos Persistiendo en Memoria (default) ****')
                return new ModelMem()
        }
    }
}

export default ModelFactory