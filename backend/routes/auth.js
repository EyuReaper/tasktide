const express = require('express');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const pool = require('../config/db'); // Import database connection
const router = express.Router();

// Signup Route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, hashedPassword]
        );
        const token = jwt.sign({ id: result.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token, user: result.rows[0] });
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
            'SELECT * FROM users WHERE email = $1',
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user });
    } catch (err) {
        console.error('Error in login:', err);
        res.status(500).json({ error: 'Could not log in' });
    }
});

module.exports = router;
