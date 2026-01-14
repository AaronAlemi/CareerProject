require('dotenv').config()
require('colors')

// The port the server will listen on. Defaults to 3001
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001

// TODO: Will be used for the database integration
const BCRYPT_WORK_FACTOR = process.env.BCRYPT_WORK_FACTOR ? Number(process.env.BCRYPT_WORK_FACTOR) : 13;
const SECRET_KEY = process.env.SECRET_KEY;

// Create database url
// This takes in all environment variables from the .env file
function getDatabaseUri()
{
    const dbUser = process.env.DATABASE_USER || 'postgres';
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : 'postgres';
    const dbHost = process.env.DATABASE_HOST || 'localhost';
    const dbPort = process.env.DATABASE_PORT || 5432;
    const dbName = process.env.DATABASE_NAME || 'careerproject';

    // If a database url is supplied, use that url. Otherwise, create a db connection string.
    return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}

console.log("Career Project Config: ".red)
console.log("PORT: ".blue, PORT)
console.log("Career Project URI: ".blue, getDatabaseUri())
console.log("-----")

module.exports = {
    PORT,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR,
    getDatabaseUri
}