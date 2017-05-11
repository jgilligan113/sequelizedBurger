var db = require("../models");

module.exports = function(app){
    console.log("yo mama");
    app.get("/", function(req, res) {
        console.log("I'm here");
        db.Burger.findAll({}).then(function(dbBurger) {
            var retObj = {Burger: dbBurger};
            
            //res.json(dbBurger);
            res.render('index', retObj);
        });
    });

    app.post("/api/burgers", function(req, res){
         console.log("moma");
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: false
        }).then(function(dbBurger) {
            //console.log(dbBurger);
            //res.json(dbBurger);
            res.redirect('/');
        });
    });

    app.put("/api/burgers/:id", function(req, res) {
        db.Burger.update({
            devoured: true
        }, {where: {
            id: req.params.id
        }}).then(function(dbBurger){
            //res.json(dbBurger);
            //res.render('index', dbBurger)
            res.redirect('/');
        });
    });
};
