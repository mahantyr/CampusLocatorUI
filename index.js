const compression = require("compression");
const cors = require("cors");
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const httpStatus = require("http-status");
const terminate = require("./error/terminate");
const ApiError = require("./error/ApiError");
const { errorConverter, errorHandler } = require("./error/error");
const Logger = require("./logger/index");
const config = require("./config.js");

//------------------------------
var jwt = require("jsonwebtoken");
var rp = require("request-promise");
var cookieParser = require("cookie-parser");
// var session = require('express-session');
var session = require("cookie-session");
var request = require("request");
//-------------------------------

var app = express();

app.use(helmet());

app.use(compression());

app.options("*", cors());
app.use(cors());

var routes = require("./api/routes/endpoints");

app.use(Logger.requestLogger);

//Set EJS template for redering dashboard
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


const SSO = {
};


//---------------------

routes(app);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(
    new ApiError(
      httpStatus.NOT_FOUND,
      "Unable to find requested route",
      "Server"
    )
  );
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

app.set("port", process.env.PORT || 5000);
console.log("Node app is running");
let server = app.listen(app.get("port"), function () {
  Logger.customlogger.debug("Node app is running on port", app.get("port"));
});

const exitHandler = terminate(server, {
  coredump: false,
  timeout: 500,
});

process.on("uncaughtException", exitHandler(1, "Unexpected Error"));
process.on("unhandledRejection", exitHandler(1, "Unhandled Promise"));
process.on("SIGTERM", exitHandler(0, "SIGTERM"));
process.on("SIGINT", exitHandler(0, "SIGINT"));
