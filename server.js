const express = require ('express');
const cors = require ('cors');
const { Pool} = require ('pg');
require('dotenv').config();

app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool();




const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('HELLO FROM BACKEND')
  
});

app.listen(PORT, () =>{
    console.log(` Firing from http://localhost:${PORT}`)
} );