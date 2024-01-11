import express from 'express';
import request from 'supertest';
import { validation } from '../../../src/infra/middlewares/validation';
import { VehicleInput } from '../../../src/modules/vehicles/schema';
import { CreateVehicleSchema, UpdateVehicleSchema } from '../../../src/presentation/vehicles/schema';

describe('Validation Middleware', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.post('/', validation(CreateVehicleSchema), (req, res) => res.status(200).json({ message: 'Success' }));
    app.put('/:id', validation(UpdateVehicleSchema), (req, res) => res.status(200).json({ message: 'Success' }));
  });

  it('should return 400 for invalid data', async () => {
    const vehicleData = {
        brand: 'Ferrari',
    };

    const res = await request(app)
      .post('/')
      .send(vehicleData);

    expect(res.status).toBe(400);
  });

  it('should return 200 for valid data', async () => {
    const vehicleData: VehicleInput = {
        brand: 'XABLAU',
        plate: 'ABC-1234',
        type: 'car',
    };

    const res = await request(app)
      .post('/')
      .send(vehicleData);

    expect(res.status).toBe(200);
  });


  it('should validate fields when editing a vehicle', async () => {
    app.put('/:id', validation(UpdateVehicleSchema), (req, res) => res.status(200).json({ message: 'Success' }));

    const vehicleData = {
       type: '000',
       brand: 'Ferrari',
    };

    const res = await request(app)
      .put('/1')
      .send(vehicleData);

    expect(res.status).toBe(400);
  });
});