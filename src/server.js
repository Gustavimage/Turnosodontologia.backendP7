import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { app } from './app.js';
import { envConfig } from './config/env.config.js';
import { connectDB } from './config/database.config.js';

const archivoActual = fileURLToPath(import.meta.url);
const carpetaActual = path.dirname(archivoActual);
dotenv.config({ path: path.join(carpetaActual, '../.env') });

const startServer = async () => {
    try {
        await connectDB();

        app.listen(envConfig.port, () => {
            console.log(`Servidor escuchando en el puerto ${envConfig.port}`);
        });

    } catch (error) {
        console.error("No se pudo iniciar el servidor:", error.message);
        process.exit(1);
    }
};

startServer();