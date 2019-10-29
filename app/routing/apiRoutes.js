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
            photo: ""
        };

        console.log(req.body);
        
        let newFriend = req.body;

        // highest possible difference is 40.  Set initial to be higher than that.
        let lowestDifference = 50;
        let currentDifference = 0;
        console.log("starting " + lowestDifference);
        
        for (i=0; i<friends.length; i++) {

            // console.log(friends[i]);
            currentDifference = 0;
            

            for (s=0; s<friends[i].scores.length; s++) {
                currentDifference += Math.abs(parseInt(newFriend.scores[s]) - parseInt(friends[i].scores[s]));
            };

            console.log(currentDifference);

            if (currentDifference < lowestDifference) {
                match.name = friends[i].name;
                match.photo = friends[i].photo;
                lowestDifference = currentDifference;
            };

            console.log(lowestDifference);
        }
       
        friends.push(newFriend);
        console.log("added to friends list");
        
        console.log(match);
        lowestDifference = 50;
        res.json(match);
    });
}