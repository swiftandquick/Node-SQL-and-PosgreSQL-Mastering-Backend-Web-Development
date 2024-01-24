// Require packages.
const express = require("express");
const bodyParser = require("body-parser");

// Require routes from routes/index.js.
const routes = require("./routes/index");

// Import the route from monsters, habitats, and lives.
const monsters = require("./routes/monsters");
const habitats = require("./routes/habitats");
const lives = require("./routes/lives");

// Call the express() function to create an express application.
const app = express();

// Put the bodyParser middleware before the routes.
app.use(bodyParser.json());

// Use the routes middleware.
app.use("/", routes);

// If an error is caught, this middleware will print out the error in json format.
app.use((err, req, res, next) => {
  res.json(err);
});

// Export the app object.
module.exports = app;
