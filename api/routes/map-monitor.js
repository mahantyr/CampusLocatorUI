'use strict';

const axios = require("axios");
const httpStatus = require("http-status");
const config = require("../../config.js");
const ApiError = require("../../error/ApiError.js");
var moment = require('moment-timezone');

const fetch = require("node-fetch");

exports.test = function(req, res, next) {
    let instanceKey = req.params.instanceKey.toLowerCase();
    let requiredURL = url + instanceKey + '/status';
    console.log("URL Formed",requiredURL);
    const HttpsProxyAgent = require('https-proxy-agent');
    try{
        (async () => {
            const proxyAgent = new HttpsProxyAgent('http://proxy.us.com:80');
            const response = await fetch(requiredURL, { agent: proxyAgent});
            const body = await response.text();
            console.log(body);
            res.send(body);
        })();
    }
    catch (err){
        next(err);
    }  
};