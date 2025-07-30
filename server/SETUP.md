# Setup Guide

## Environment Configuration

Create a `.env` file in the server directory with the following variables:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/freeflow_db"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
```

Replace the following:

- `username`: Your PostgreSQL username
- `password`: Your PostgreSQL password
- `localhost:5432`: Your database host and port
- `freeflow_db`: Your database name
- `your-super-secret-jwt-key-change-this-in-production`: A secure random string for JWT signing

## Database Setup

1. Make sure PostgreSQL is running
2. Create the database if it doesn't exist:

   ```sql
   CREATE DATABASE freeflow_db;
   ```

3. Create the Freelancer table:
   ```sql
   CREATE TABLE "Freelancer" (
     "ID" SERIAL PRIMARY KEY,
     "CognitoID" VARCHAR(100) UNIQUE,
     "Name" VARCHAR(100) NOT NULL,
     "Email" VARCHAR(100) UNIQUE NOT NULL,
     "Password" VARCHAR(100) NOT NULL,
     "MetamaskID" VARCHAR(100) UNIQUE
   );
   ```

## Prisma Setup

1. Generate Prisma client:

   ```bash
   cd server
   npx prisma generate
   ```

2. Pull existing schema (if table already exists):

   ```bash
   npx prisma db pull
   ```

3. Generate client with updated schema:
   ```bash
   npx prisma generate
   ```

## Running the Application

1. Install dependencies:

   ```bash
   cd server
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000`

## Frontend Setup

1. Install dependencies:

   ```bash
   cd client
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:3000`

## Testing the Setup

1. Register a new freelancer at `http://localhost:3000/register`
2. Login at `http://localhost:3000/login`
3. You should be redirected to the freelancer home page

## Troubleshooting

- **Database Connection Error**: Check your DATABASE_URL in .env
- **Prisma Errors**: Run `npx prisma generate` after schema changes
- **JWT Errors**: Make sure JWT_SECRET is set in .env
