/*************** API CONTROLLER ****************************/

// GET express and router libraries and store them into an object
var express = require("express");
var router = express.Router();
//IMPORT the sr model
var sr_object = require("../models/sr.js");

// get an sr object
router.get("/api/:sr_number", function(req, res) {
    // GET SR object based on the sr_number parameters 
    sr_object.sr(req.params.sr_number, function(result) {
        // callback responds with a JSON object that is passed in from the model and orm files
        res.json(result);
    });
});

// get a step from an sr
router.get("/api/:sr_number/:step", function(req, res) {
    // get a step attribute based on the sr params and the step params 
    sr_object.step(req.params.sr_number, req.params.step, function(result) {
        // callback responds with a JSON object that is passed in from the model and orm files
        res.json(result);
    });
});

router.post("/api/:sr_number", function(req, res) {
    console.log(req.body);
    sr_object.new(req.body.sr_num, req.body, function(result) {
        res.end("Success sr object added")
    });
});

router.post("/api/:sr_number/:step", function(req, res) {
    sr_object.update(req.params.sr_number, req.params.sr_number, req.body, function(result) {
        res.end("Success step added")
    });
    console.log(req.body);
});
// Export routes for server.js to use.
module.exports = router;