import Joi from 'joi';
import { VehicleBrand, VehicleType } from '../../modules/vehicles/schema';

export const CreateVehicleSchema = Joi.object({
    brand: Joi.string().valid(VehicleBrand.XABLAU, VehicleBrand.VALIDVEHICLE),
    plate: Joi.string().required(),
    type: Joi.string().valid(VehicleType.CAR, VehicleType.MOTORCYCLE, VehicleType.TRUCK),
});

export const UpdateVehicleSchema = Joi.object({
    brand: Joi.string().valid(VehicleBrand.XABLAU, VehicleBrand.VALIDVEHICLE),
    plate: Joi.string(),
    type: Joi.string().valid(VehicleType.CAR, VehicleType.MOTORCYCLE, VehicleType.TRUCK),
});