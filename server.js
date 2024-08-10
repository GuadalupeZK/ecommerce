import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import config from './config.js';
import path from 'path';
import { fileURLToPath } from 'url';

import clientesRouter from './routes/clientes.js';
import productosRouter from './routes/productos.js';
import carritoRouter from './routes/carritos.js';

import connectionDB from './models/DB.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); // Inicializas express aquí

// Crear el servidor HTTP
const httpServer = createServer(app);

// Configurar Socket.io para que escuche en el mismo servidor HTTP
const io = new Server(httpServer, {
    cors: { origin: "*" }
});

// Middlewares
app.use(cors()); // Habilito CORS
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());



// Rutas / Endpoints API RESTFUL
app.use('/api/clientes', new clientesRouter().config());
app.use('/api/carrito',  new carritoRouter().config());
app.use('/api/productos', new productosRouter().config());

// Conexión a la base de datos si estás usando MongoDB
if(config.MODO_PERSISTENCIA == 'MONGODB') {
    await connectionDB.conectar();
}

// Escuchar en el puerto especificado
const PORT = config.PORT || 3000;
httpServer.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
httpServer.on('error', error => console.log(`Error en servidor: ${error.message}`));

// Configuración básica de Socket.io (opcional)
io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');
    socket.on('disconnect', () => {
        console.log('Un cliente se ha desconectado');
    });
});
