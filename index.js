const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); 
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const PORT = process.env.PORT || 3000;

app.get('/conductores', async (req, res) => {
    const result = await pool.query('SELECT * FROM conductores');
    res.json(result.rows);
});


app.get('/automoviles', async (req, res) => {
    const result = await pool.query('SELECT * FROM automoviles');
    res.json(result.rows);
});

app.get('/conductoressinauto', async (req, res) => {
    const { edad } = req.query;
    const query = `
        SELECT c.* FROM conductores c
        LEFT JOIN automoviles a ON c.nombre = a.nombre_conductor
        WHERE a.nombre_conductor IS NULL AND c.edad < $1`;
    const result = await pool.query(query, [edad]);
    res.json(result.rows);
});

app.get('/solitos', async (req, res) => {
    const query = `
        SELECT c.nombre AS conductor, a.patente AS auto
        FROM conductores c
        FULL OUTER JOIN automoviles a ON c.nombre = a.nombre_conductor
        WHERE c.nombre IS NULL OR a.nombre_conductor IS NULL`;
    const result = await pool.query(query);
    res.json(result.rows);
});

app.get('/auto', async (req, res) => {
    const { patente, iniciopatente } = req.query;
    let query = `
        SELECT a.*, c.edad FROM automoviles a
        LEFT JOIN conductores c ON a.nombre_conductor = c.nombre `;
    
    if (patente) {
        query += `WHERE a.patente = $1`;
        const result = await pool.query(query, [patente]);
        return res.json(result.rows);
    } 
    if (iniciopatente) {
        query += `WHERE a.patente LIKE $1`;
        const result = await pool.query(query, [iniciopatente + '%']);
        return res.json(result.rows);
    }
    res.status(400).json({ error: "Faltan parámetros" });
});

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));