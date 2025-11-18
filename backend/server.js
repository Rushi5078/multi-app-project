const express = require("express");
const { Client } = require("pg");

const app = express();
const PORT = 5000;

// PostgreSQL connection
const client = new Client({
    host: "db",
    user: "postgres",
    password: "postgres",
    database: "testdb"
});

client.connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch(err => console.error("DB connection error:", err));

app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});

// API → returns data from DB
app.get("/api/data", async (req, res) => {
    try {
        const result = await client.query("SELECT NOW() as server_time");
        res.json({
            message: "Hello from Backend + PostgreSQL!",
            time: result.rows[0].server_time
        });
    } catch (err) {
        res.json({ error: "DB Error", details: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
