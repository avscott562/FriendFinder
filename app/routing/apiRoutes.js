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
        mewFriend = req.body;

        let difference = 100;
      
       
      
        res.json(friends[1]);
    })
    .done(function(newFriend) {
         // friends.push(friend);
         console.log("add to friends list");
    });
}