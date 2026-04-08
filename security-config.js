// security-config.js

// Environment variables handling
const dotenv = require('dotenv');
dotenv.config();

// Input validation and sanitization functions
const validator = require('validator');

function sanitizeInput(input) {
    return validator.escape(input);
}

function validateEmail(email) {
    return validator.isEmail(email);
}

// Function for generating CSRF tokens
const csrf = require('csrf');
const tokens = new csrf();

function generateCsrfToken() {
    return tokens.create(process.env.CSRF_SECRET);
}

// Rate limiting utility
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

module.exports = { sanitizeInput, validateEmail, generateCsrfToken, limiter };