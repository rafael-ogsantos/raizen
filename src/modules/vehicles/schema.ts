import Joi from "joi";

export enum VehicleType {
    CAR = 'car',
    MOTORCYCLE = 'motorcycle',
    TRUCK = 'truck',
}

export enum VehicleBrand {
    XABLAU = 'XABLAU',
    VALIDVEHICLE = 'VALIDVEHICLE',
}

export const VehicleShema = Joi.object<Vehicle, true>({
    id: Joi.string().required(),
    brand: Joi.string().valid(VehicleBrand.XABLAU, VehicleBrand.VALIDVEHICLE),
    plate: Joi.string().required(),
    type: Joi.string().valid(VehicleType.CAR, VehicleType.MOTORCYCLE, VehicleType.TRUCK),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
});


export type Vehicle = {
    id: string;
    brand?: string;
    plate: string;
    type?: string;
    createdAt: Date;
    updatedAt: Date;
}

export type VehicleInput = Pick<Vehicle, 'brand' | 'plate' | 'type'>;

export type VehicleUpdate = Partial<Vehicle>;
