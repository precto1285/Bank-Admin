var db = require("../models");

module.exports = function(app) {
    app.get("api/account", function(req, res) {
        db.Account.findAll({
            include: [db.Post]
        }).then(function(dbAccount) {
            res.json(dbAccount);
        });
    });

};