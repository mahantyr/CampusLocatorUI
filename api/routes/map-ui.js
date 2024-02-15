"use strict";

exports.get_dashboard = async function(req, res, next){
    try{
        res.render('dashboard');
    }
    catch (err){
        next(err);
    }
}