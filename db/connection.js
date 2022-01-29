const mysql = require('mysql2');

// connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: '@Lemonade02',
        database: 'election'
    },
    console.log('Connected to the election database bitch.')
);

module.exports = db;