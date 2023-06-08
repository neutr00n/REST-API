const { addSchema, favoriteSchema } = require("./contacts");
const {
  registerSchemas,
  loginSchemas,
  subscriptionSchemas,
} = require("./user");

module.exports = {
  addSchema,
  favoriteSchema,
  registerSchemas,
  loginSchemas,
  subscriptionSchemas,
};
