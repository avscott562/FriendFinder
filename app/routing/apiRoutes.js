// Dependencies
// =============================================================
// require('dotenv').config();

const path = require("path");

//import data from data store friends.js
let friends = require("../data/friends.js");

//export data from server
module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        let friend = req.body;
    
        console.log("api log " + friend);
      
        friends.push(friend);
      
        res.json(friend);
    });
}