const express = require ('express');
const cors = require ('cors');
const { Pool} = require ('pg');
require('dotenv').config();

app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool();

app.get('/customers', (req, res) =>{

    pool.query('SELECT * FROM customers')
    .then((data) => {
        res.json(data.rows);
    })
    .catch((err) => {

    console.error('Error:', err);
    res.status(500).json({ error: 'An error occurred' });
  });
});

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('HELLO FROM BACKEND')
  
});

app.listen(PORT, () =>{
    console.log(` Firing from http://localhost:${PORT}`)
} );