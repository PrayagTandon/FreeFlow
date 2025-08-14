-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    cognitoid VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    metamaskid VARCHAR(100) UNIQUE,
    role VARCHAR(20) NOT NULL CHECK (role IN ('Client', 'Freelancer')),
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create client table
CREATE TABLE IF NOT EXISTS client (
    id SERIAL PRIMARY KEY,
    cognitoid VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    metamaskid VARCHAR(100)
);

-- Create freelancer table
CREATE TABLE IF NOT EXISTS freelancer (
    id SERIAL PRIMARY KEY,
    cognitoid VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    metamaskid VARCHAR(100),
    activejobs INTEGER DEFAULT 0,
    rejectedbids INTEGER DEFAULT 0,
    pendingbids INTEGER DEFAULT 0
);

-- Create chat rooms table for Stream Chat
CREATE TABLE IF NOT EXISTS chat_rooms (
    id SERIAL PRIMARY KEY,
    proposal_id INTEGER NOT NULL,
    stream_channel_id VARCHAR(255) NOT NULL,
    client_id INTEGER NOT NULL,
    freelancer_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'archived', 'closed')),
    UNIQUE(proposal_id)
);

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_users_cognitoid ON users(cognitoid);
CREATE INDEX IF NOT EXISTS idx_client_cognitoid ON client(cognitoid);
CREATE INDEX IF NOT EXISTS idx_freelancer_cognitoid ON freelancer(cognitoid);
CREATE INDEX IF NOT EXISTS idx_chat_rooms_proposal_id ON chat_rooms(proposal_id);
CREATE INDEX IF NOT EXISTS idx_chat_rooms_client_id ON chat_rooms(client_id);
CREATE INDEX IF NOT EXISTS idx_chat_rooms_freelancer_id ON chat_rooms(freelancer_id); 