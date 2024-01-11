import { VehicleInput } from "../../src/modules/vehicles/schema";

export function createVehicleInput(overrides?: Partial<VehicleInput>): VehicleInput {
    const vehicle: VehicleInput = {
        brand: 'XABLAU',
        plate: 'ABC-1234',
        type: 'car',
        ...overrides,
    };

    return vehicle;
}