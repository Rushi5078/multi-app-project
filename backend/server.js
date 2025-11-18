const express = require('express');
const { Client } = require('pg');

const app = express();

app.get('/api', async (req, res) => {
    res.json({ message: "Hello from Node.js Backend!" });
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
