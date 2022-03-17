const { Client } = require('pg');
require('dotenv').config();

// Connect to elephantsql-dev database
const db = new Client(process.env.PG_ELEPHANT_URL);

db.connect().then(() => {
    console.log('Connected to ElephantSQL');
}).catch(err => {
    console.log('Error connecting to ElephantSQL', err.stack);
    process.exit(1);
});

module.exports = db;