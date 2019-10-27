// Dependencies
// =============================================================
require('dotenv').config();
const express = require("express");
const path = require("path");
let friends = require("./app/data/friends.js")

// Sets up the Express App
// =============================================================
let app = express();
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
});






// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
// Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + PORT);
});