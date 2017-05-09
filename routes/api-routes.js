var db = require("../models");

module.exports = function(app){
    app.get("api/burgers", function(req, res) {
        db.Burger.findAll({}).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    app.post("api/burgers", function(req, res){
        db.Burger.create({
            text: req.body.text,
            devoured: false
        }).then(function(dbBurger) {
            res.json(dbBurger);
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
