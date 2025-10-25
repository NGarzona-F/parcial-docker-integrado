const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || '12345',
    database: process.env.DB_NAME || 'parcial_db'
};

app.use(express.json());

const client = new Client(dbConfig);

client.connect()
    .then(() => console.log('Conectado a PostgreSQL'))
    .catch(err => console.error('Error conectando a PostgreSQL:', err));

app.get('/', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM estudiantes');
        
        res.json({
           estudiante: {
    nombre: "Nestor Alexander Flores Garzona",
    expediente: "25845", 
    codigo_estudiantil: "FG22-I04-001",
    asignatura: "Implantación de Sistemas",
    parcial: "Parcial Integrador - Docker"
},
            base_datos: {
                conectado: true,
                total_estudiantes: result.rows.length,
                estudiantes: result.rows
            },
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({
            error: "Error conectando a la base de datos",
            detalles: error.message
        });
    }
});

app.get('/health', async (req, res) => {
    try {
        await client.query('SELECT 1');
        res.json({ 
            status: 'OK',
            service: 'parcial-api',
            database: 'connected',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(503).json({
            status: 'ERROR', 
            service: 'parcial-api',
            database: 'disconnected',
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://0.0.0.0:${port}`);
});