const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Lista de veiculos');
});

router.post('/', (req, res) => {
  res.send('Novo veiculos');
});

module.exports = router;