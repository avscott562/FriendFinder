// Dependencies
// =============================================================
// require('dotenv').config();

const path = require("path");

module.exports = function (app) {

    //when the survery URL is selected, show the survey.html on the UI
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

     //when any directory other than survey is selected, show the home page on the UI
     app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

}