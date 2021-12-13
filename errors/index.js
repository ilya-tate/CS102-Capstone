const CustomAPIError = require("./custom-error");
const BadRequestError = require("./bad-request");
const NotFoundError = require("./not-found");
const UnauthError = require("./unauth");

module.exports = {
  CustomAPIError,
  BadRequestError,
  NotFoundError,
  UnauthError
};
