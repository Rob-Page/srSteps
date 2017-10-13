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
    //TODO: integrate this logic into the model rather than the controller
    //logic check for data consistence between url sr and data sr
    if (req.params.sr_number == req.body.sr_num) {
        // GRAPS THE sr NUMBER from the url
        // gets the data from the body as a JSON OBJECT
        // calls the new function and passes in the call back and the sr number with data

        sr_object.new(req.params.sr_number, req.body, function(result) {
            res.end("Success sr object added")
        });
        // if the logic is true return success

    } else {
        // if the logic was not true tell the post origin the following message
        res.end('ERROR:' + 'The sr number passed in through the url did not match the data');
    }

});

router.post("/api/:sr_number/:step", function(req, res) {
    sr_object.update(req.params.sr_number, req.params.sr_number, req.body, function(result) {
        res.end("Success step added")
    });
    console.log(req.body);
});
// Export routes for server.js to use.
module.exports = router;