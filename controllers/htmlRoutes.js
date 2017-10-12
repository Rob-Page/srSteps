/*************** API CONTROLLER ****************************/

// GET express and router libraries and store them into an object
var express = require("express");
var router = express.Router();
var path = require("path");

// get an sr object
router.get("/", function(req, res) {
//test
		res.sendFile(path.join(__dirname, "../views/index.html"));
});

// Export routes for server.js to use.
module.exports = router;