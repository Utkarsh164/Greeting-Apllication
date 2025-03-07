const express = require("express");
const router = express.Router(); 
const { getUser } = require("../controller/user.control"); // Import controller function

// Define a route to greet the user
router.get("/greet", getUser);

module.exports = router;
