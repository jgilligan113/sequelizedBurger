var path = require("path");
var db = require("../models");

console.log("Here is db.Burger", db.Burger);

module.exports = function(app) {
    app.get("/", function(req, res) {

        res.render("index");
    });
};

module.exports = function(app) {
    app.post("/", function(req, res) {
        //console.log(res);
        res.render("index");
    });
};

//app.get("/weekday", function(req, res) {
//  res.render("index", lunches[0]);
//});