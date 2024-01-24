// Get the Router class from express package.
const { Router } = require("express");

// Import pool from index.js.
const pool = require("../db/index");

// Create a router object.
const router = Router();

// If I go to localhost:3000/monsters, print out all entries from the monsters table on the web page, order by ID.
// If there's an error, call the middleware, which is the next function, pass in the error.
router.get("/", (request, response, next) => {
  pool.query("SELECT * FROM monsters ORDER BY id ASC", (err, res) => {
    if (err) {
      return next(err);
    }
    response.json(res.rows);
  });
});

// If go to localhost:3000/monsters/:id, the web page will display the entry from monsters table with the specified id.
router.get("/:id", (request, response, next) => {
  const { id } = request.params;
  pool.query("SELECT * FROM monsters WHERE id = $1", [id], (err, res) => {
    if (err) {
      return next(err);
    }
    response.json(res.rows);
  });
});

// If a POST request is sent to localhost:3000/monsters, an entry is added to the monsters table.
// To add an entry, I need to enter the name and personality.
// Redirect to localhost:3000/monsters after data is changed.
router.post("/", (request, response, next) => {
  const { name, personality } = request.body;
  pool.query(
    "INSERT INTO monsters(name, personality) VALUES ($1, $2)",
    [name, personality],
    (err, res) => {
      if (err) {
        return next(err);
      }
      response.redirect("/monsters");
    }
  );
});

// If a POST request is sent to localhost:3000/monsters/:id, an entry with specified ID is updated on the monsters table.
// To edit an entry, I will need the id, name, and personality, name and personality will be updated.
// Create a fields array, if request.body sends back properties name and speed, only name is accepted into the fields array.
// fields is use to filter out properties that aren't name or personality,
// so if I put other properties into the PUT request, like speed, those properties will not be added.
// Redirect to localhost:3000/monsters after data is changed.
router.put("/:id", (request, response, next) => {
  const { id } = request.params;
  const keys = ["name", "personality"];
  const fields = [];
  keys.forEach((key) => {
    if (request.body[key]) {
      fields.push(key);
    }
  });
  fields.forEach((field, index) => {
    pool.query(
      `UPDATE monsters SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) {
          return next(err);
        }
        if (index === fields.length - 1) {
          response.redirect("/monsters");
        }
      }
    );
  });
});

// If a DELETE request is sent to localhost:3000/monsters/:id, an entry with specified ID is delete from the monsters table.
// Redirect to localhost:3000/monsters after data is changed.
router.delete("/:id", (request, response, next) => {
  const { id } = request.params;
  pool.query("DELETE FROM monsters WHERE id=($1)", [id], (err, res) => {
    if (err) {
      return next(err);
    }
    response.redirect("/monsters");
  });
});

// Export the router object.
module.exports = router;
