const Logger = require("../logger/index");

function terminate(server, options = { coredump: false, timeout: 500 }) {
  const exit = (code) => {
    options.coredump ? process.abort() : process.exit(code);
  };

  return (code, reason) => (err, promise) => {
    if (err && err instanceof Error) {
      Logger.customlogger.error("SERVER TERMINATED", err.message, err.stack);
    }
    Logger.customlogger.info("SERVER Terminating gracefully");
    server.close(exit);
    setTimeout(exit, options.timeout).unref();
  };
}

module.exports = terminate;
