const express = require('express');
// const bodyParse = require('body-parser');
const mysql = require('mysql');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '123456789',
    ssl : false,
    port : 3306,
    database : 'sakila',
    supportBigNumbers : true,
    connectionLimit : 3
});

app.listen(port, () => console.log(`DEVELOPMENT MODE LISTENING ${port}`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


pool.on('acquire', (connection) => {
   
    console.log(`Connection ${connection.threadId} acquired`);

    
    
});

app.use(morgan('dev', {
    skip: (req, res) => {
        return res.statusCode < 400;
    }
}));

checkpool = () => {
    pool.on('acquire', (connection) => {
        console.log(`Connection ${connection.threadId} acquired`);
    });

    console.log('test');
}

app.get('', (req, res) => {   

    pool.getConnection((err, conn) => {
        if (err) throw err;

        conn.query('SELECT * FROM customer', (err, rows, fields) => {

            conn.release();

            if (!err) {
                console.log(fields);
                res.send(rows);
            } else {
                console.error(err.stack);
            }

        });
       
    })

    

});;