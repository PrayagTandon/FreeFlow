require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? ['https://free-flow-7j2a.vercel.app/']
        : ['http://localhost:3000'],
    credentials: true
}));
app.use(express.json());

// Placeholder for auth routes
app.use('/api/auth', require('./src/routes/auth'));

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 