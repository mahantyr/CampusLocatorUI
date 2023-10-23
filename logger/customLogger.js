const {createLogger, format, transports} = require('winston');

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
};

const customFormat = format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    format.printf(
        (info) => `${info.timestamp} ${info.level.toUpperCase()}: ${info.message}`
    )
);

const customTransports = [
    new transports.Console(),
    /*
    require('winston-papertrail').Papertrail;
    new transports.Papertrail({
        host: '****.papertrailapp.com', //to get this from papertrail account
        port: 12345, //to get this from papertrail account
        level: 'http',
    });
    new transports.File({
        filename: "logs/error.log",
        level: "error",
    }),
    new transports.File({ filename: "logs/all.log" }),
    */
];

const customLogger = (level) => {   
    return createLogger({
        level: level,
        levels,
        format: customFormat,
        
        transports: customTransports,
      });
}

module.exports = customLogger;