// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
//var Chirp = require("../models/chirp.js");

const db = require('../models')
// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.burger.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a chirp
  app.post("/api/new", function(req, res) {

    console.log("Burgers");
    console.log(req.body);

    db.burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
      
      //created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });
  app.post("/api/eaten", function(req, res) {

    console.log("Burgers");
    console.log(req.body);

    db.burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
      
      //created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};