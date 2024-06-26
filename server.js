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
      const data = await pool
      .query('SELECT * FROM customers');
      res.json(data.rows);
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  app.get('/customers/:id', async (req, res) => {
    try {
        const { id } = req.params;
    const data = await pool.query('SELECT * FROM customers WHERE id=$1;', [id]);
    res.json(data.rows[0]);
        
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'An error occurred' });
      }
    
  })

  app.post('/customers', (req, res) => {
    const {name, email, phone, address} = req.body

    pool.query('INSERT INTO customers (name, email, phone, address) VALUES ($1, $2, $3, $4);',
    [name, email, phone, address],
    (err, results) =>{
        if (err) {
            console.log(err)
            res.status(500).send('Error creating customer')
        } else{
            res.status(201).send('Success creating customer')
        }
    }
)
  })

  app.put('/customers/:customerId', (req, res) => {
    const { customerId } = req.params;
    const { name, email, phone, address } = req.body;
  
    pool.query(
      'UPDATE customers SET name = $1, email = $2, phone = $3, address = $4 WHERE id = $5;',
      [name, email, phone, address, customerId],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error updating customer');
        } else {
          res.status(200).send('Customer updated successfully');
        }
      }
    );
  });

  app.delete('/customers/:customerId', (req, res) => {
    const { customerId } = req.params;
  
    pool.query(
      'DELETE FROM customers WHERE id = $1;',
      [customerId],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error deleting customer');
        } else {
          res.status(200).send('Customer deleted successfully');
        }
      }
    );
  });
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('HELLO FROM BACKEND')
  
});

app.listen(PORT, () =>{
    console.log(` Firing from http://localhost:${PORT}`)
} );