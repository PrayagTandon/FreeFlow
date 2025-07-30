const express = require('express');
const router = express.Router();
// Removed pool import since we're using Prisma
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// @route   POST /api/auth/register
// @desc    Register freelancer
router.post('/register', async (req, res) => {
    const { name, email, password, metamaskId, cognitoId } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({ message: 'Name, email, and password are required.' });
    }
    try {
        // Check if freelancer already exists using Prisma
        const existingFreelancer = await prisma.freelancer.findFirst({
            where: {
                OR: [
                    { email: email },
                    { metamaskId: metamaskId }
                ]
            }
        });

        if (existingFreelancer) {
            return res.status(400).json({ message: 'Freelancer with this email or metamaskId already exists.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new freelancer using Prisma
        const newFreelancer = await prisma.freelancer.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                metamaskId: metamaskId,
                cognitoId: cognitoId
            },
            select: {
                id: true,
                name: true,
                email: true,
                metamaskId: true,
                cognitoId: true
            }
        });

        // Respond with new freelancer info (excluding password)
        res.status(201).json(newFreelancer);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /api/auth/login
// @desc    Login freelancer
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }
    try {
        // Find freelancer using Prisma
        const freelancer = await prisma.freelancer.findUnique({
            where: { email: email }
        });

        if (!freelancer) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, freelancer.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Create JWT
        const token = jwt.sign(
            {
                id: freelancer.id,
                email: freelancer.email,
                name: freelancer.name
            },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({
            token,
            freelancer: {
                id: freelancer.id,
                name: freelancer.name,
                email: freelancer.email,
                metamaskId: freelancer.metamaskId,
                cognitoId: freelancer.cognitoId
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; 