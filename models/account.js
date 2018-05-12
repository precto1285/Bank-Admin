module.exports = function(sequlize, DataTypes) {
    var checking = sequelize.define("checking", {
        checking: DataTypes.STRING
    });

    checking.associate = function(models) {

        checking.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };


    return checking;

    
    var saving = sequelize.define("saving", {
        saving: DataTypes.STRING
    });

    saving.associate = function(models) {

        saving.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };

    return savings;
};