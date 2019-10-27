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
        let newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newFriend);
      
        friends.push(newFriend);
      
        res.json(newFriend);
    });
}