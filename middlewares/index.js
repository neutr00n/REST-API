const {
  validateAddBody,
  validateUpdateBody,
  validateFavorite,
  validateAuth,
} = require("./validateBody");

const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  validateAddBody,
  validateUpdateBody,
  isValidId,
  validateFavorite,
  authenticate,
  validateAuth,
  upload,
};
