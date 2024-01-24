// Get the Router class from express package.
const { Router } = require("express");

// Import pool from index.js.
const pool = require("../db/index");

// Create a router object.
const router = Router();

// If I go to localhost:3000/habitats, print out all entries from the habitats table on the web page, order by ID.
router.get("/", (request, response, next) => {
  pool.query("SELECT * FROM habitats ORDER BY id ASC", (err, res) => {
    if (err) {
      return next(err);
    }
    response.json(res.rows);
  });
});

// If a POST request is sent to localhost:3000/habitats, an entry is added to the habitats table.
// To add an entry, I need to enter the name, climate, and temperature.
// Redirect to localhost:3000/habitats after data is changed.
router.post("/", (request, response, next) => {
  const { name, climate, temperature } = request.body;
  pool.query(
    "INSERT INTO habitats(name, climate, temperature) VALUES($1, $2, $3)",
    [name, climate, temperature],
    (err, res) => {
      if (err) {
        return next(err);
      }
      response.redirect("/habitats");
    }
  );
});

// Export the router object.
module.exports = router;
