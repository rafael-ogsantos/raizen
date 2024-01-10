import { VehicleInput } from "../../src/modules/vehicles/schema";

export function createVehicleInput(overrides?: Partial<VehicleInput>): VehicleInput {
    const vehicle: VehicleInput = {
        brand: 'Default Brand',
        plate: 'ABC-1234',
        type: 'car',
        ...overrides,
    };

    return vehicle;
}