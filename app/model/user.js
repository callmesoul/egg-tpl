export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nickName:{
            type: DataTypes.STRING,
            allowNull: true
        },
        avatarUrl:{
            type: DataTypes.STRING,
            allowNull: true
        },
        openId:{
            type: DataTypes.STRING,
            allowNull: false

        },
        city:{
            type: DataTypes.STRING,
            allowNull: true
        },
        province:{
            type: DataTypes.STRING,
            allowNull: true
        },
        country:{
            type: DataTypes.STRING,
            allowNull: true,
            remark:"国家"
        },

    });

    User.associate = function(models) {
        models.User.hasOne(models.User,{as:"invite"});
        models.User.hasMany(models.Order);
        models.User.hasMany(models.Rebate);
        models.User.hasMany(models.Comment);
        models.User.hasMany(models.Activity);
    };

    return User;
};