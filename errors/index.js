const badRequest = require("./badRequest");
const CustomAPIError = require("./customError");
const { unAuthenticated } = require("./unAuthenticated");

module.exports = {
  badRequest,
  CustomAPIError,
  unAuthenticated,
};
