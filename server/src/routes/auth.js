import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, password, metamaskId, cognitoId } = req.body;

    console.log('Registration attempt:', { name, email, metamaskId, cognitoId });

    if (!email || !password || !name) {
        return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    try {
        // Check if JWT_SECRET is configured
        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET environment variable is not set');
            return res.status(500).json({ message: 'Server configuration error' });
        }

        const existingFreelancer = await prisma.freelancer.findFirst({
            where: {
                OR: [
                    { email },
                    ...(metamaskId ? [{ metamaskid: metamaskId }] : [])
                ]
            }
        });

        if (existingFreelancer) {
            return res.status(400).json({ message: 'Freelancer already exists.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newFreelancer = await prisma.freelancer.create({
            data: {
                name,
                email,
                password: hashedPassword,
                metamaskid: metamaskId || null,
                cognitoid: cognitoId || `cognito_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
            },
            select: {
                id: true,
                name: true,
                email: true,
                metamaskid: true,
                cognitoid: true
            }
        });

        console.log('Freelancer created successfully:', newFreelancer.id);
        res.status(201).json(newFreelancer);
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({
            message: 'Server error',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log('Login attempt:', { email });

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        // Check if JWT_SECRET is configured
        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET environment variable is not set');
            return res.status(500).json({ message: 'Server configuration error' });
        }

        const freelancer = await prisma.freelancer.findUnique({ where: { email } });
        if (!freelancer) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const isPasswordValid = await bcrypt.compare(password, freelancer.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign(
            {
                id: freelancer.id,
                email: freelancer.email,
                name: freelancer.name
            },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        console.log('Login successful for:', freelancer.email);
        res.json({
            token,
            freelancer: {
                id: freelancer.id,
                name: freelancer.name,
                email: freelancer.email,
                metamaskId: freelancer.metamaskid,
                cognitoId: freelancer.cognitoid
            }
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({
            message: 'Server error',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
});

export default router; 