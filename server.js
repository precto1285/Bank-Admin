var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");


app.use(bodyParser.urlencoded({ extended: true }));
app.unsubscribe(bodyParser.json());

app.use(express.static("public"));

//routes
require("./routes/")(app);
require("./routes/")(app);
require("./routes/")(app);

//Sync Sequelize models & Start express app
sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});