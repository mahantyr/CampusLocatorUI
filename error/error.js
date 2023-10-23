const httpStatus = require("http-status");
const ApiError = require("./ApiError");
const Logger = require("../logger/index");

const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    //In Status API response status code is present in error.response.status whereas in general error.statusCode has code
    const statusCode = error.response ? err.response.status : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.response ? err.response.data.message : httpStatus[statusCode];
    
    Logger.customlogger.error("SERVER RAW ERROR", error);
    const source = error.response ? err.response.config.url : "Server";
    error = new ApiError(statusCode, message, source);
  }

  next(error);
};

const errorHandler = (err, req, res, next) => {
  let { statusCode, message, source } = err;

  const response = {
    message: message,
    source: source
  };
  Logger.customlogger.error("ERROR HANDLED", response);
  res.status(statusCode).send(response);
};

module.exports = {
  errorConverter,
  errorHandler,
};