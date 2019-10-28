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
        
        let match = {
            name: "",
            photo: "",
            difference: 100
        };

        console.log(req.body);
        
        let newFriend = req.body;
        let friendScores = newFriend.scores;

        let currentDifference = 0;
        
        for (i=0; i<friends.length; i++) {

            console.log(friends[i]);
            currentDifference = 0;

            for (s=0; s<friends[i].scores[s]; s++) {
                currentDifference += Math.abs(parseInt(newFriend.scores[s]) - parseInt(friends[i].scores[s]));
                
                if (currentDifference <= match.difference) {
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.difference = currentDifference;
                }
            }
        }
       
        friends.push(newFriend);
        //   console.log("add to friends list");
      
        res.json(match);
    });
}