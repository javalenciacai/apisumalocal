const { sumar } = require('./funtions');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Ruta para sumar dos números
app.get('/sumar/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const resultado = sumar(parseFloat(num1), parseFloat(num2));
  res.json({ resultado });
});

// Puerto en el que se ejecutará la API
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});