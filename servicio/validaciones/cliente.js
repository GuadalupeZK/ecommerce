import Joi from 'joi'

//https://joi.dev/api/?v=17.13.0

const validar = cliente => {
    const clienteSchema = Joi.object({
        nombre: Joi.string().min(2).max(20).required(),
        apellido: Joi.string().min(2).max(20).required(),
        edad: Joi.number().required(),
        dni: Joi.string().min(2).max(8).required()
    })

    const { error } = clienteSchema.validate(cliente);
    //console.log(error)

    return error
}

export default validar