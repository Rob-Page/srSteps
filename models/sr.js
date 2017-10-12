// Import the ORM to create functions that will in
var orm = require("./sr_orm.js");

var orm_Item = {
  // gets a sr number and a call back in and passes the orm result back in the callback 
  sr: function(sr_num, cb) {
    orm.get_sr(sr_num, function(res) {
      cb(res);
    });
  },
  // gets a sr number, step and a call back in and passes the orm result back in the callback 
  step: function(sr_num, step, cb) {
    orm.get_attribute(sr_num, step, function(res) {
      cb(res);
    });
  },
  // gets a sr number and a value in to update the databse with that data for a new SR. In the call back it passes the orm result back
  new: function(sr_num, value, cb) {
    orm.modify_sr(sr_num, value, function(res) {
      cb(res);
    });
  },
  // gets a sr number, attribute, and a value in and to update the databse In the call back it passes the orm result back
  update: function (sr_num, attribute, value, cb) {
    orm.modify_attribute(sr_num, attribute, value, function(res) {
      cb(res);
    })
  }
};


// Export the database functions for the controller (catsController.js).
module.exports = orm_Item;