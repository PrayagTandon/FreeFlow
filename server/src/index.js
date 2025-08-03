import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

import { PrismaClient } from '@prisma/client';
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



// Simple CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? 'https://free-flow-7j2a.vercel.app'
    : ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use(express.json());

// Debug middleware to log requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Origin: ${req.headers.origin}`);
  next();
});

// Import routes
import authRoutes from './routes/auth.js';
app.use('/api/auth', authRoutes);

// Get routes
app.get('/', (_, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 