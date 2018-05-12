module.exports = function(sequlize, DataTypes) {
    var User = sequelize.define("user", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userAddress: {
            type: DataTypes.TEXT,
            allowNnull: false
        }
    });

    User.associate = function(models) {

        User.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return user;
};