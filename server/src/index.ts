import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();

async function testConnection() {
  try {
    const users = await prisma.freelancer.findMany();
    console.log('Connected to Neon DB. Freelancers:', users);
  } catch (err) {
    console.error('❌ Failed to connect to DB:', err);
  }
}

testConnection();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? ['https://free-flow-7j2a.vercel.app']
        : ['http://localhost:3000'],
    credentials: true
}));
app.use(express.json());

// Import routes
import authRoutes from './routes/auth';
app.use('/api/auth', authRoutes);

// Get routes
app.get('/', (_, res) => {
    res.send('API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
