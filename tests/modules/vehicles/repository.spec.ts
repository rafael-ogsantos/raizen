import * as repository from '../../../src/modules/vehicles/repository';
import { VehicleInput, VehicleUpdate } from '../../../src/modules/vehicles/schema';
import { createVehicleInput } from '../../factories/vehicle';

describe('VehiclesRepository', () => {

    beforeEach(async () => {
        await repository.clear();
    });
    

    it('should create a new vehicle', async () => {
        const vehicle = createVehicleInput();

        const vehicleCreated = await repository.createVehicle(vehicle);
        
        expect(vehicleCreated).toHaveProperty('id');

        expect(vehicleCreated.plate).toBe(vehicle.plate);
    });    

    it('should update a vehicle', async () => {
        const vehicle = createVehicleInput();

        const vehicleCreated = await repository.createVehicle(vehicle);
        
        const typeUpdated: VehicleUpdate = {
            type: 'motorcycle',
        }

        const vehicleUpdated = await repository.updateVehicle(vehicleCreated.id, typeUpdated);

        expect(vehicleUpdated).toHaveProperty('id');

        expect(vehicleUpdated.type).toBe('motorcycle');
    })

    it('should returns instance of vehicle', async () => {
        const vehicle: VehicleInput = {
            brand: 'Ferrari',
            plate: 'ABC-1234',
            type: 'car',
        };

        const vehicleCreated = await repository.createVehicle(vehicle);

        expect(vehicleCreated).toHaveProperty('id');
    })

    it('should delete a vehicle', async () => {
        const vehicle = createVehicleInput();

        const vehicleCreated = await repository.createVehicle(vehicle);

        expect(vehicleCreated).toHaveProperty('id');

        const vehicleDeleted = await repository.deleteVehicle(vehicleCreated.id);

        expect(vehicleDeleted).toBeUndefined();
    })

    it('should get by id', async () => {
        const vehicle = createVehicleInput();

        const vehicleCreated = await repository.createVehicle(vehicle);

        expect(vehicleCreated).toHaveProperty('id');

        const vehicleGet = await repository.getVehicle(vehicleCreated.id);

        expect(vehicleGet).toHaveProperty('id');
        expect(vehicleGet.id).toBe(vehicleCreated.id);
    })

    it('should get by plate', async () => {
        const vehicle = createVehicleInput();

        const vehicleCreated = await repository.createVehicle(vehicle);

        expect(vehicleCreated).toHaveProperty('id');

        const vehicleGet = await repository.getVehicleByPlate(vehicleCreated.plate);

        expect(vehicleGet).toHaveProperty('id');
        expect(vehicleGet.plate).toBe(vehicleCreated.plate);
    })

    it('should return an error if updating a non-existent vehicle', async () => {
        const typeUpdated: VehicleUpdate = {
            type: 'motorcycle',
        }

        await expect(repository.updateVehicle('000', typeUpdated)).rejects.toThrow('Vehicle not found');
    })

    it('should return an error if deleting a non-existent vehicle', async () => {
        await expect(repository.deleteVehicle('000')).rejects.toThrow('Vehicle not found');
    })
})