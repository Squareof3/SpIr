const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const Promise = require("bluebird");



const app = express();
const PORT = process.env.PORT || 5000;

var Example = require("./models/userModel.js")

// Configure body parser for AJAX requests
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view




// Set up promises with mongoose
mongoose.Promise = Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/spirapp",
  {
    useMongoClient: true
  }
);
var db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get("/register", function(req, res) {
  res.send(app.js);
});

app.post("submit", function(req, res) {
  var user = new Example(req.body);

  user.getFullName();
  user.lastUpdatedDate();

  user.save(function(error, credentials) {
    if(error) {
      res.send(error);
    }
    else{
      res.send(credentials);
    }
  });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
