# Prisma Setup Guide

## What is Prisma?

Prisma is a modern database toolkit that includes:

- **Prisma Client**: Auto-generated and type-safe query builder for Node.js & TypeScript
- **Prisma Migrate**: Database migration tool
- **Prisma Studio**: GUI to view and edit data in your database

## Key Benefits:

1. **Type Safety**: Full TypeScript support with auto-generated types
2. **Auto-completion**: IDE support for database queries
3. **Database Agnostic**: Works with PostgreSQL, MySQL, SQLite, and more
4. **Migration Management**: Version-controlled database schema changes
5. **Query Optimization**: Efficient and optimized database queries

## Setup Instructions:

### 1. Environment Variables

Make sure your `.env` file contains:

```
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
JWT_SECRET="your_jwt_secret_here"
```

### 2. Generate Prisma Client

```bash
cd server
npx prisma generate
```

### 3. Create and Apply Migrations

```bash
# Create a new migration based on schema changes
npx prisma migrate dev --name init

# Apply migrations to database
npx prisma migrate deploy
```

### 4. Sync Database Schema (if table already exists)

If your `Freelancer` table already exists in the database:

```bash
# Pull the existing schema from database
npx prisma db pull

# Generate client with updated schema
npx prisma generate
```

### 5. Verify Setup

```bash
# Open Prisma Studio to view/edit data
npx prisma studio
```

## Usage Examples:

### Basic CRUD Operations:

```typescript
import { prisma } from "./lib/prisma";

// Create a freelancer
const newFreelancer = await prisma.freelancer.create({
  data: {
    name: "John Doe",
    email: "john@example.com",
    password: "hashedPassword",
    metamaskId: "0x123...",
    cognitoId: "cognito-id",
  },
});

// Find freelancer by email
const freelancer = await prisma.freelancer.findUnique({
  where: { email: "john@example.com" },
});

// Update freelancer
const updatedFreelancer = await prisma.freelancer.update({
  where: { id: 1 },
  data: { name: "Jane Doe" },
});

// Delete freelancer
await prisma.freelancer.delete({
  where: { id: 1 },
});
```

### Complex Queries:

```typescript
// Find freelancers with specific criteria
const freelancers = await prisma.freelancer.findMany({
  where: {
    OR: [{ email: { contains: "@gmail.com" } }, { metamaskId: { not: null } }],
  },
  select: {
    id: true,
    name: true,
    email: true,
    metamaskId: true,
  },
});
```

## Database Schema:

The current schema includes:

- `Freelancer` model with fields:
  - `id` (Primary Key, Auto-increment)
  - `cognitoId` (Optional, Unique)
  - `name` (Required)
  - `email` (Required, Unique)
  - `password` (Required, Hashed)
  - `metamaskId` (Optional, Unique)

## Troubleshooting:

### Common Issues:

1. **Connection Error**: Check DATABASE_URL in .env
2. **Migration Conflicts**: Reset database and re-run migrations
3. **Type Errors**: Run `npx prisma generate` after schema changes

### Reset Database:

```bash
# Reset database (WARNING: This deletes all data)
npx prisma migrate reset

# Recreate database from scratch
npx prisma db push
```

## Next Steps:

1. Update your API routes to use Prisma instead of raw SQL
2. Add more models to the schema as needed
3. Set up relationships between models
4. Add database indexes for better performance
