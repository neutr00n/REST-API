const {
  validateAddBody,
  validateUpdateBody,
  validateFavorite,
  validateAuth,
} = require("./validateBody");

const isValidId = require("./isValidId");

const authenticate = require("./authenticate");

module.exports = {
  validateAddBody,
  validateUpdateBody,
  isValidId,
  validateFavorite,
  authenticate,
  validateAuth,
};
