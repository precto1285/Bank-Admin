module.exports = function(sequlize, DataTypes) {
    var account = sequelize.define("account", {
        account_type: { 
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    account.associate = function(models) {

        account.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return account;
};