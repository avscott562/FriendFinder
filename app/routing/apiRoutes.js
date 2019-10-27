// Dependencies
// =============================================================
require('dotenv').config();
const express = require("express");
const path = require("path");
let friends = require("../data/friends.js");

// Sets up the Express App
// =============================================================
let app = express();
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

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






// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
// Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + PORT);
});