import mongoose from 'mongoose';
import config from '../config.js';

class connectionDB {
    static connectionOK = false;
    static db = null;

    static clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

    static conectar = async () => {
        try {
            console.log('-> Conectando a la base de datos (mongoose)...');
            const connection = await mongoose.connect(config.connectionString, this.clientOptions);
            console.log('[OK] Base de datos conectada!');

            connectionDB.connectionOK = true;
            connectionDB.db = connection.connection.db;  // Aquí se almacena la instancia de la base de datos.
        } catch (error) {
            console.log(`[ERROR] Error en conexión de base de datos: ${error.message}`);
        }
    }
}

export default connectionDB;
