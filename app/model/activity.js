export default (sequelize, DataTypes) => {
    const Activity = sequelize.define('Activity', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: true,
        paranoid: true,

    });

    Activity.associate = function(models) {
        models.Activity.hasMany(models.Comment);
        models.Activity.hasMany(models.Order);
        models.Activity.hasMany(models.Rebate);
    };


    return Activity;
};