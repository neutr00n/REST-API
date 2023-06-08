const { HttpError } = require("../helpers");

const validateAddBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      const { path } = error.details[0];
      throw HttpError(400, `missing required ${path} field`);
    }
    next();
  };

  return func;
};

const validateUpdateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    const isEmpty = Object.keys(req.body).length;

    if (isEmpty === 0) {
      throw HttpError(400, "missing fields");
    }

    if (error) {
      const { path } = error.details[0];
      throw HttpError(400, `missing required ${path} field`);
    }
    next();
  };

  return func;
};

const validateFavorite = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      throw HttpError(400, `missing field favorite`);
    }
    next();
  };

  return func;
};

const validateAuth = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      throw HttpError(400, error.message);
    }
    next();
  };

  return func;
};

module.exports = {
  validateAddBody,
  validateUpdateBody,
  validateFavorite,
  validateAuth,
};
