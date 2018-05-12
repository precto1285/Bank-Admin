module.exports = function(sequlize, DataTypes) {
    var Transaction = sequelize.define("account", {
        transaction_type: { 
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    Transaction.associate = function(models) {

        Transaction.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return account;
};