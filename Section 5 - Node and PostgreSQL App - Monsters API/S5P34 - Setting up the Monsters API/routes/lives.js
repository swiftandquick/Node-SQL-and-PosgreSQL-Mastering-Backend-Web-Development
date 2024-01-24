// Get the Router class from express package.
const { Router } = require("express");

// Import pool from index.js.
const pool = require("../db/index");

// Create a router object.
const router = Router();

// If I go to localhost:3000/lives, print out all entries from the lives table.
router.get("/", (request, response, next) => {
  pool.query("SELECT * FROM lives", (err, res) => {
    if (err) {
      return next(err);
    }
    response.json(res.rows);
  });
});

// If I go to localhost:3000/lives/conditions, print out the joined table of lives and habitats.
router.get("/conditions", (request, response, next) => {
  pool.query(
    "SELECT * FROM lives JOIN habitats ON habitats.name = lives.habitat",
    (err, res) => {
      if (err) {
        return next(err);
      }
      response.json(res.rows);
    }
  );
});

// Export the router object.
module.exports = router;
