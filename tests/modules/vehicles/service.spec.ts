import * as service from "../../../src/modules/vehicles/service";
import { createVehicleInput } from "../../factories/vehicle";

describe('VehiclesService', () => {
    it('should not allow creating a vehicle with a plate that already exists', async () => {
        const vehicleInput = createVehicleInput();
        try {
            await service.createVehicle(vehicleInput);
            await service.createVehicle(vehicleInput);
            fail('Expected an error to be thrown');
        } catch (error) {
            expect(error.message).toBe('A vehicle with this plate already exists');
        }
    });
})