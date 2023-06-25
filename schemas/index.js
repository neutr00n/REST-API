const { addSchema, favoriteSchema } = require("./contacts");
const {
  registerSchemas,
  loginSchemas,
  emailSchema,
  subscriptionSchemas,
} = require("./user");

module.exports = {
  addSchema,
  favoriteSchema,
  registerSchemas,
  loginSchemas,
  emailSchema,
  subscriptionSchemas,
};
