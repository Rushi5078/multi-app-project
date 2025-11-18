const express = require("express");
const { Client } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());

// PostgreSQL connection
const db = new Client({
    host: "your-db-host",
    port: 5432,
    user: "postgres",
    password: "yourpassword",
    database: "testdb"
});

db.connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch((err) => console.error("DB error:", err));

// API
app.get("/api", async (req, res) => {
    try {
        const result = await db.query("SELECT NOW() as time");
        res.json({
            message: "Hello from Backend + PostgreSQL!",
            time: result.rows[0].time
        });
    } catch (err) {
        res.json({ error: "DB Error", details: err });
    }
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
