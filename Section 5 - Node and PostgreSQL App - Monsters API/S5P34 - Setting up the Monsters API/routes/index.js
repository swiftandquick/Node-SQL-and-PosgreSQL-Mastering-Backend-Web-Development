// Get the Router class from express package.
const { Router } = require("express");

// Import the route from monsters, habitats, and lives.
const monsters = require("./monsters");
const habitats = require("./habitats");
const lives = require("./lives");

// Create a router object.
const router = Router();

// If I go to localhost:3000/monsters, monsters (route from monsters.js) will be used.
router.use("/monsters", monsters);

// If I go to localhost:3000/habitats, habitats (route from habitats.js) will be used.
router.use("/habitats", habitats);

// If I go to localhost:3000/lives, lives (route from lives.js) will be used.
router.use("/lives", lives);

// Export the router object.
module.exports = router;
