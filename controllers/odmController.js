/*************** API CONTROLLER ****************************/

var express = require("express");
var fs = require('file-system');

var router = express.Router();

var sr_object = require("../models/sr.js");

//TODO
router.get("/api/:sr_number", function(req, res) {
	sr_object.sr(req.params.sr_number, function(result) {
		console.log(result);
		res.json(result);
	});
});

router.get("/api/:sr_number/:step", function(req, res) {
	sr_object.step(req.params.sr_number, req.params.step, function(result) {
		console.log(result);
		res.json(result);
	});
});

router.post("/api/:sr_number", function(req, res) {
	// fs.writeFile('data/test.txt', JSON.stringify(hbsObject), function(err) {})
	sr_object.new(req.params.sr_number, req.body, function(result) {
	});
});

router.post("/api/:sr_number/:step", function(req, res) {
	// fs.writeFile('data/test.txt', JSON.stringify(hbsObject), function(err) {})
	console.log(req.body);
});
// Export routes for server.js to use.
module.exports = router;