import mongoose from "mongoose";

const carritoSchema = mongoose.Schema({
      carrito: Array
}, { versionKey: false })

export const CarritoModel = mongoose.model('carrito', carritoSchema)