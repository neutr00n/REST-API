const Joi = require("joi");

const registerSchemas = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

const loginSchemas = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

const subscriptionSchemas = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

module.exports = {
  registerSchemas,
  loginSchemas,
  subscriptionSchemas,
};
