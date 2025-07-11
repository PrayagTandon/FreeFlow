const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @route   POST /api/auth/register
// @desc    Register user (freelancer)
router.post('/register', async (req, res) => {
    const { email, password, metamaskId } = req.body;
    if (!email || !password || !metamaskId) {
        return res.status(400).json({ message: 'Email, password, and metamaskId are required.' });
    }
    // Registration logic will go here
    try {
        // Check if user already exists
        const userExists = await pool.query('SELECT * FROM users WHERE email = $1 OR metamask_id = $2', [email, metamaskId]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: 'User with this email or metamaskId already exists.' });
        }
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Insert new user
        const newUser = await pool.query(
            'INSERT INTO users (email, password, metamask_id, role) VALUES ($1, $2, $3, $4) RETURNING id, email, metamask_id, role',
            [email, hashedPassword, metamaskId, 'freelancer']
        );
        // Respond with new user info (excluding password)
        res.status(201).json(newUser.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /api/auth/login
// @desc    Login user
router.post('/login', async (req, res) => {
    const { email, password, metamaskId } = req.body;
    if (!email || !password || !metamaskId) {
        return res.status(400).json({ message: 'Email, password, and metamaskId are required.' });
    }
    try {
        // Find user
        const userRes = await pool.query('SELECT * FROM users WHERE email = $1 AND metamask_id = $2', [email, metamaskId]);
        if (userRes.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        const user = userRes.rows[0];
        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        // Create JWT
        const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { id: user.id, email: user.email, metamaskId: user.metamask_id, role: user.role } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; 