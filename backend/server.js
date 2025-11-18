const express = require('express');
const { Client } = require('pg');

const app = express();

// Default route (fixes "Cannot GET /")
app.get('/', (req, res) => {
    res.send("Backend is running successfully!");
});

// API route
app.get('/api', async (req, res) => {
    res.json({ message: "Hello from Node.js Backend!" });
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
