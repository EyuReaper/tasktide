const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const pool = require('./db');

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            const email = profile.emails[0].value;
            let user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

            if (user.rows.length === 0) {
                user = await pool.query(
                    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
                    [profile.displayName, email, '']
                );
            }
            done(null, user.rows[0]);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    done(null, user.rows[0]);
});
