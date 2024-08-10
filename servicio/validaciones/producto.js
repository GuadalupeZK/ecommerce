import Joi from 'joi'

//https://joi.dev/api/?v=17.13.0

const validar = producto => {
    const productoSchema = Joi.object({
        nombre: Joi.string().min(2).max(80).required(),
        precio: Joi.number().required(),
        stock: Joi.number().required(),
        marca: Joi.string().optional(),
        categoria: Joi.string().optional(),
        detalles: Joi.string().optional(),
        foto: Joi.string().optional(),
        envio: Joi.boolean().optional()
    })

    const { error } = productoSchema.validate(producto);
    //console.log(error)

    return error
}

export default validar