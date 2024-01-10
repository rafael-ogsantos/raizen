import Joi from 'joi';

export const vehicleSchemaMap = Joi.object({
    brand: Joi.string(),
    plate: Joi.string().required(),
    type: Joi.string().valid('car', 'motorcycle', 'truck'),
});

export const CreateVehicleSchema = vehicleSchemaMap;