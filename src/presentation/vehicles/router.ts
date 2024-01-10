import express, { Request, Response, Router } from 'express';
import { validation } from '../../middlewares/validation';
import { CreateVehicleSchema } from './schema';
const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Lista de veiculos ');
});

router.post('/', validation(CreateVehicleSchema), (req: Request, res: Response) => {
  res.send('Novo veiculos');
});

export default router;