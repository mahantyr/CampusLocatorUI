"use strict";

module.exports = function (app) {
  const trust = require("./map-monitor");
  const index = require("./map-ui");

  app.route("/getDashboard").get(index.get_dashboard);

};
