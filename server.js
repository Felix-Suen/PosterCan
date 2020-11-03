const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect Database
connectDB();

// init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posters', require('./routes/api/posters'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));