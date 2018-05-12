//Set up Express App
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;
//Require models
var db = require("./models");

//Parse Application/x-www.form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//Parse Application/JSON
app.unsubscribe(bodyParser.json());
//Static Directory
app.use(express.static("public"));

//routes
require("./routes/user-api-routes.js")(app);
require("./routes/account-api-routes.js")(app);
require("./routes/transaction-api-routes.js")(app);

//Sync Sequelize models & Start express app
sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});