var db = require("../models");

module.exports = function(app) {
    app.get("/api/transaction", function(req, res) {
        db.Transaction.findAll({
            include: [dbPost]
        }).then(function(dbTransaction) {
        res.json(dbTransaction);
        });
    });
    
    app.post().then()
};