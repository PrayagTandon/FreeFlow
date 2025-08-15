import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();

async function testAuth() {
    try {
        console.log('🔍 Testing database connection...');

        // Test database connection
        const freelancers = await prisma.freelancer.findMany();
        console.log('✅ Database connected successfully');
        console.log(`📊 Found ${freelancers.length} freelancers in database`);

        // Test environment variables
        console.log('\n🔍 Checking environment variables...');
        if (!process.env.JWT_SECRET) {
            console.log('❌ JWT_SECRET is not set');
        } else {
            console.log('✅ JWT_SECRET is configured');
        }

        if (!process.env.DATABASE_URL) {
            console.log('❌ DATABASE_URL is not set');
        } else {
            console.log('✅ DATABASE_URL is configured');
        }

        console.log('\n🔍 Checking Prisma schema...');
        const freelancerCount = await prisma.freelancer.count();
        console.log(`✅ Freelancer table accessible, count: ${freelancerCount}`);

    } catch (error) {
        console.error('❌ Test failed:', error);
    } finally {
        await prisma.$disconnect();
    }
}

testAuth(); 