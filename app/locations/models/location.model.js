const Joi = require('joi');

const locationModel = Joi.object({
    id: Joi.string(),
    userId: Joi.string(),
    longitude: Joi.string().required(),
    latitude: Joi.string().required(),
    timestamp: Joi.date().timestamp().required()
});

module.exports = locationModel;