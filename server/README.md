# FreeFlow Backend

## Setup

1. Create a `.env` file in the `server/` directory with the following:

```
DATABASE_URL=postgresql://username:password@localhost:5432/freeflow
JWT_SECRET=your_jwt_secret
PORT=5000
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
npm run dev
```

## Database

Create a `users` table in your PostgreSQL database:

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  metamask_id VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) NOT NULL
);
```
