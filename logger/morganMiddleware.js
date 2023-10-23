const morgan = require('morgan');

const customLogger = require('./customLogger');

const streamOptions = {
    write: (message) => customLogger('http').http(message.trim()),
};

const skip = () => {
    return false;
};

const morganMiddleware = morgan(
    'combined',
    // ':method :url :status :res[content-length] - :response-time ms',
    {
      stream: streamOptions,
      skip: skip
    }
);

module.exports = morganMiddleware;