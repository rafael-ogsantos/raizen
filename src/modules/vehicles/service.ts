import * as repository from './repository';
import { Vehicle, VehicleInput } from './schema';

export const createVehicle = async (vehicle: VehicleInput): Promise<Vehicle> => {
    const vehicleExists = await repository.getVehicleByPlate(vehicle.plate);
    if (vehicleExists) {
        throw new Error('A vehicle with this plate already exists');
    }

    return await repository.createVehicle(vehicle);
}

export const getVehicleByPlate = async (plate: string): Promise<Vehicle> => {
    return await repository.getVehicleByPlate(plate);
}

export const updateVehicle = async (id: string, vehicle: Partial<Vehicle>): Promise<Vehicle> => {
    return await repository.updateVehicle(id, vehicle);
}

export const deleteVehicle = async (id: string): Promise<void> => {
    return await repository.deleteVehicle(id);
}

export const getVehicle = async (id: string): Promise<Vehicle> => {
    return await repository.getVehicle(id);
}

export const getVehicles = async (): Promise<Vehicle[]> => {
    return await repository.getVehicles();
}
