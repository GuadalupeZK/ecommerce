import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    dni: String,
    comentario: String,
}, { versionKey: false })

export const ClientModel = mongoose.model('cliente', productoSchema)