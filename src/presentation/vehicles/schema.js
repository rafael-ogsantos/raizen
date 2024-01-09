const Joi = require('joi');

const vehicleSchema = Joi.object({
    brand: Joi.string(),
    plate: Joi.string().required(),
    type: Joi.string().valid('car', 'motorcycle', 'truck'),
});

module.exports = vehicleSchema;