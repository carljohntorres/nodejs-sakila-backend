const express = require('express');
// const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const conn = require('./private/resource/connection');

const app = express();

// app.use(cors());

// app.use(morgan('dev', {
//     skip: (req, res) => {
//         return res.statusCode < 400;
//     }
// }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({ message : 'Service is running' });
});

// Connect first before enable API
conn.connect( err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`DATABASE CONNECTED THREAD ID : ${conn.threadId}.`);

    const port = process.env.PORT || 3000;

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Include all routes dynamically
    let norm_path = path.join(__dirname, "routes");
    
    fs.readdirSync(norm_path).forEach( file => {
        app.use('/', require(`./routes/${file}`));
    });

    app.listen(port, () => console.log(`DEVELOPMENT MODE LISTENING ${port}`));
   
});


