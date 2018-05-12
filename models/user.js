module.exports = function(sequlize, DataTypes) {
    var userName = sequelize.define("userName", {
        userName: DataTypes.STRING
    });

    userName.associate = function(models) {

        userName.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };

    return userName;
};