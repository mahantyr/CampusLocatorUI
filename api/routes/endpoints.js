"use strict";

module.exports = function (app) {
  const trust = require("./instance-monitor");
  const index = require("./instance-monitor-ui");

  app.route("/getDashboard").get(index.get_dashboard);

};
