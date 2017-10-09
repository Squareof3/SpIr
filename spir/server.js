var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var App = require('./src/App.js')



// Create Instance of Express
var app = express();

var databaseUrl = "spirlist";
var collections = ["spirlist"];

var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
    console.log("Database Error:", error);
});

app.get("/submit", function(req, res) {
    res.send("Hello World");
});



app.listen(3000, function(){
    console.log("App running on port 3000!");
});

