// Require packages.
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

// Import the fortunes.json file, which contains JSON data.
const fortunes = require("./data/fortunes");

// Call the express() function to create an express application.
const app = express();

// Use bodyPaser as middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const writeFortunes = (json) => {
  fs.writeFile("./data/fortunes.json", JSON.stringify(json), (err) =>
    console.log(err)
  );
};

// If I go to localhost:3000/fortunes, I will see the JSON data.
app.get("/fortunes", (req, res) => {
  res.json(fortunes);
});

// If I go to localhost:3000/fortunes/random, one of the many items from the JSON data.
app.get("/fortunes/random", (req, res) => {
  res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
});

// If I go to localhost:3000/fortunes/:id, id being any input, such as localhost:3000/fortunes/1:
// If the ID exists, such as 1, browser will display the item with that ID from the JSON data.
// If the ID doesn't exist, such as 4000, browser will display nothing.
app.get("/fortunes/:id", (req, res) => {
  res.json(fortunes.find((f) => f.id === parseInt(req.params.id)));
});

// POST request on localhost:3000/fortunes will create a new item (object) in the fortunes.json file's array.
// message, lucky_number, and spirit_animal will be retrieved from req.body.
// id is the current max ID plus 1, if no previous item existed, ID is 1.
app.post("/fortunes", (req, res) => {
  console.log(req.body);
  const { message, lucky_number, spirit_animal } = req.body;
  const fortune_ids = fortunes.map((f) => f.id);
  const fortune = {
    id: (fortune_ids.length > 0 ? Math.max(...fortune_ids) : 0) + 1,
    message,
    lucky_number,
    spirit_animal,
  };
  const new_fortunes = fortunes.concat(fortune);
  writeFortunes(new_fortunes);
  res.json(new_fortunes);
});

// PUT request on localhost:3000/fortunes/:id will update the item with the specified id.
// Find the fortune by id then update its message, lucky_number, and spirit_animal.
app.put("/fortunes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { message, lucky_number, spirit_animal } = req.body;
  const old_fortune = fortunes.find((f) => f.id === id);
  ["message", "lucky_number", "spirit_animal"].forEach((key) => {
    if (req.body[key]) {
      old_fortune[key] = req.body[key];
    }
  });
  writeFortunes(fortunes);
  res.json(fortunes);
});

// DELETE request on localhost:3000/fortunes/:id will delete the item with the specified id.
// Find the fortune by id (from parameter) then delete it from fortunes.json using a filter method.
app.delete("/fortunes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const new_fortunes = fortunes.filter((f) => f.id !== id);
  writeFortunes(new_fortunes);
  res.json(new_fortunes);
});

module.exports = app;
