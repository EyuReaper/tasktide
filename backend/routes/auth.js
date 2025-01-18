const express = require('express');
const pool = require('../config/db'); // Import database connection
const router = express.Router();
const db = require('../config/db');

// Signup Route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [username, email, password]
        );
        res.status(201).json({ message: 'User created!', user: result.rows[0] });
    } catch (err) {
        console.error('Error in signup:', err);
        res.status(500).json({ error: 'Could not create user' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1 AND password = $2',
            [email, password]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', user: result.rows[0] });
    } catch (err) {
        console.error('Error in login:', err);
        res.status(500).json({ error: 'Could not log in' });
    }
});

module.exports = router;
