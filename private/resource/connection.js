const mysql = require('mysql');
const config = require('../../configuration/credentials');

const conn = mysql.createConnection({
    host : config.HOST,
    user : config.USER,
    password : config.PASS,
    ssl : config.SSL,
    database : config.DATABASE,
    supportBigNumbers : config.SUPPORTBIGNUMBERS
});

// conn.connect( err => {
//     if (err) throw err;
//     console.log(`DATABASE CONNECTED THREAD ID : ${conn.threadId}.`);
// })

module.exports = conn;


