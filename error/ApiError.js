class ApiError extends Error {
  constructor(statusCode, message, source) {
    super(message);
    this.statusCode = statusCode;
    this.source = source;
  }
}

module.exports = ApiError;