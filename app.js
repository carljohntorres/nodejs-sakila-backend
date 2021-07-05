const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const morgan = require('morgan');
const app = express();

const conn = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : '123456789',
    ssl : false,
    port : 3306,
    database : 'sakila',
    supportBigNumbers : true,
    connectTimeout : 30

});

// connection check before API work
conn.connect((err) => {
    if (err) {
        console.error('Can\'t reach Database ' + err.stack)
    }
    console.log('Database connected : ' + conn.threadId);
    app.listen(3000);
});

app.use(morgan('dev', {
    skip: (req, res) => {
        return res.statusCode < 400;
    }
}));




app.get('/', (req, res) => {

    res.send('<h1>Hello world</h1>');

});;