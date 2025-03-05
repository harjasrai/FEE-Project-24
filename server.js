const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());  // Allow frontend to talk to backend
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (CSS, images)

// Dummy user data (replace with database later)
const users = [];

// SIGNUP ENDPOINT
app.post('/api/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Save new user
    users.push({ name, email, password });
    res.status(201).json({ message: 'User registered successfully' });
});

// LOGIN ENDPOINT
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
