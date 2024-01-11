import express, { Request, Response, Router } from 'express';
import { validation } from '../../infra/middlewares/validation';
import * as service from '../../modules/vehicles/service';
import { UpdateVehicleSchema } from './schema';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const vehicles = await service.getVehicles();

  res.status(200).json(vehicles);
});

router.post('/',  async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const vehicle = await service.createVehicle(body);

    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const vehicle = await service.getVehicle(id);

    res.status(200).json(vehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', validation(UpdateVehicleSchema), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const vehicle = await service.updateVehicle(id, body);

    res.status(200).json(vehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await service.deleteVehicle(id);

    res.status(200).json({id, message: 'Vehicle deleted'});
  } catch (error) {
    res.status(400).send({ id, message: error.message });
  }
});

export default router;