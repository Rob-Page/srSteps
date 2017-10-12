//read from JSON file
var fs = require("fs");
// sync up our object with the file
var JSON_Object = JSON.parse(fs.readFileSync("./data/test.json"));

// create an orm object that is used to access our data and pass it back to our model
var orm = {
	get_attribute: function(sr_num, attribute, cb) {
		//query the JSON object for the sr number and the attribute that is passed in
		cb(JSON_Object[sr_num][attribute]);
	},
	get_sr: function(sr_num, cb) {
		//get sr object out of the SR object list and pass SR object into the call back function
		cb(JSON_Object[sr_num]);
	},

	modify_sr: function(sr_num, value, cb) {
		//passes the value to be added to the JSON object back into the call back function
		cb(value);
		// adds or changes new SR as an attribute to the object
		JSON_Object[sr_num] = value;
		//sync file up with object
		fs.writeFileSync("./data/test.json", JSON.stringify(JSON_Object));
	},
	modify_attribute: function(sr_num, attribute, value, cb) {
		// adds or changes attrubite for the sr passed in
		JSON_Object[sr_num][attribute] = value;
		//sync file up with object
		fs.writeFileSync("./data/test.json", JSON.stringify(JSON_Object));
	}
};
// exports orm object so that we can use the funtions to access data
module.exports = orm;