var db = require("../models");

module.exports = function(app){
    app.get("api/burgers", function(req, res) {
        console.log("I'm here");
        db.Burger.findAll({}).then(function(dbBurger) {
            res.json(dbBurger);
            console.log(dbBurger);
        });
    });

    app.post("api/burgers", function(req, res){
        console.log("here I am");
        db.Burger.create({
            text: req.body.text,
            devoured: false
        }).then(function(dbBurger) {
            res.json(dbBurger);
            console.log(dbBurger);
        });
    });

    app.put("api/burgers/:id", function(req, res) {
        db.Burger({
            text: req.body.text,
            devoured: true
        }, {where: {
            id: req.params.id
        }}).then(function(dbBurger){
            res.json(dbBurger);
        })
    })
};
