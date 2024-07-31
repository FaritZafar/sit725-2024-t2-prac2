const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files (e.g., scripts.js, CSS files)
app.use(express.static(path.join(__dirname)));

// Handle form submission
app.post('/your-server-endpoint-url', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received message from ${name} (${email}): ${message}`);
    // Handle the form data, e.g., save it to a database or send an email
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
