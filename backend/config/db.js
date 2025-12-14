const { Pool } = require('pg');

// Create a new connection pool
const pool = new Pool({
    user: process.env.DB_USER || 'tasktide_user',        // Replace with your PostgreSQL username
    host: process.env.DB_HOST || 'localhost',            // Hostname (or IP address)
    database: process.env.DB_NAME || 'tasktide_db',      // Your PostgreSQL database name
    password: process.env.DB_PASSWORD || '123',    // Your PostgreSQL password
    port: process.env.DB_PORT || 5432,                   // Default PostgreSQL port
});

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Database connected successfully! Server time:', res.rows[0]);
    }
});

// Export the pool for use in other parts of the app
module.exports = pool;
