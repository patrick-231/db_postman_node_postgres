const express = require ('express');
const cors = require ('cors');
const { Pool} = require ('pg');
require('dotenv').config();

app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool();

app.get('/customers', async (req, res) => {
    try {
      const data = await pool.query('SELECT * FROM customers');
      res.json(data.rows);
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  app.get('/customers/:id', async (req, res) => {
    try {
        const { id } = req.params;
    const data = await pool.query(' SELECT * FROM customers WHERE id=$1;', [id]);
    res.json(data.rows[0]);
        
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'An error occurred' });
      }
    
  })

  app.put('/customers')

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('HELLO FROM BACKEND')
  
});

app.listen(PORT, () =>{
    console.log(` Firing from http://localhost:${PORT}`)
} );