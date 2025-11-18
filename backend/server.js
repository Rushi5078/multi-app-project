const express = require('express');
const { Client } = require('pg');

const app = express();

// Database configuration using docker-compose environment variables
const dbConfig = {
    host: process.env.POSTGRES_HOST || "mypostgres",
    user: process.env.POSTGRES_USER || "myuser",
    password: process.env.POSTGRES_PASSWORD || "mypassword",
    database: process.env.POSTGRES_DB || "mydb",
    port: 5432,
};

app.get('/api', async (req, res) => {
    try {
        const client = new Client(dbConfig);
        await client.connect();

        const result = await client.query("SELECT NOW()");
        await client.end();

        res.json({
            message: "Hello from Backend + PostgreSQL!",
            db_time: result.rows
        });
    } catch (err) {
        console.error("DB error:", err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});

