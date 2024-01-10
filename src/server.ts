import express from 'express';

import vehicleRouter from './presentation/vehicles/router';

const app = express();

// Configuração do Express
app.use(express.json());

app.use('/vehicles', vehicleRouter);

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});