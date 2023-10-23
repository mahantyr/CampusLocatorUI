const customLogger = require('./customLogger')
const morganMiddleware = require('./morganMiddleware')

const level = () => {
    const env = process.env.NODE_ENV || "development";
    const isDevelopment = env === "development";
    return isDevelopment ? "debug" : "http";
};
let logger = {requestLogger: morganMiddleware, customlogger: customLogger(level())};

module.exports = logger;