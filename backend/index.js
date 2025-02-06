require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
//integrate authentication routes
const authRoutes = require('./routes/auth');

//database
app.use('/api/auth', authRoutes);

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('TaskTide API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
