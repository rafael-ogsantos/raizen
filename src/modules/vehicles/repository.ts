import knex from "../../../knex";
import { Vehicle, VehicleInput } from "./schema";

export const createVehicle = async (vehicle: VehicleInput): Promise<Vehicle> => {
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const createdAt = new Date();
    const updatedAt = new Date();

    const newVehicle: Vehicle = {
        id,
        ...vehicle,
        createdAt,
        updatedAt,
    };

    await knex('vehicles').insert(newVehicle);
    return newVehicle;
}

export const getVehicle = async (id: string): Promise<Vehicle> => {
    const vehicle = await knex('vehicles').where({ id }).first();
    if (!vehicle) {
        throw new Error('Vehicle not found');
    }

    return vehicle;
}

export const getVehicles = async (): Promise<Vehicle[]> => {
    return knex('vehicles').select('*');
}

export const getVehicleByPlate = async (plate: string): Promise<Vehicle> => {
    try {
        return await knex('vehicles').where({ plate }).first();
    } catch (error) {
        throw new Error('Vehicle not found');
    }
}

export const updateVehicle = async (id: string, vehicle: Partial<Vehicle>): Promise<Vehicle> => {
    const vehicleExists = await getVehicle(id);
    if (!vehicleExists) {
        throw new Error('Vehicle not found');
    }

    const updatedAt = new Date();
    const updatedVehicle = {
        ...vehicle,
        updatedAt,
    };

    await knex('vehicles').where({ id }).update(updatedVehicle);
    return await getVehicle(id)
} 

export const deleteVehicle = async (id: string): Promise<void> => {
    const vehicleExists = await getVehicle(id);
    if (!vehicleExists) {
        throw new Error('Vehicle not found');
    }
    
    await knex('vehicles').where({ id }).del();
}

export const clear = async (): Promise<void> => {
    await knex('vehicles').del();
}

