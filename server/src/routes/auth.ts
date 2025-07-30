import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();
const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
    const { name, email, password, metamaskId, cognitoId } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({ message: 'Name, email, and password are required.' });
    }
    try {
        const existingFreelancer = await prisma.freelancer.findFirst({
            where: {
                OR: [
                    { email },
                    { metamaskid: metamaskId }
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
                metamaskid: metamaskId,
                cognitoid: cognitoId
            },
            select: {
                id: true,
                name: true,
                email: true,
                metamaskid: true,
                cognitoid: true
            }
        });

        res.status(201).json(newFreelancer);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }
    try {
        const freelancer = await prisma.freelancer.findUnique({ where: { email } });
        if (!freelancer || !(await bcrypt.compare(password, freelancer.password))) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign(
            {
                id: freelancer.id,
                email: freelancer.email,
                name: freelancer.name
            },
            process.env.JWT_SECRET!,
            { expiresIn: '1d' }
        );

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
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
