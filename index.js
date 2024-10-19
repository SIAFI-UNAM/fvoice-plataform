const http = require('node:http');
const path = require('node:path');
const express = require('express'); // Add this line

const port = 3000;
const hostname = 'localhost'; // localhost o

const app = express(); // Create an Express app

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});