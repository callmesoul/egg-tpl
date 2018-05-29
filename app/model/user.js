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
        models.User.belongsToMany(models.UserGroup,{through:"user_usergroup"});
        models.User.belongsToMany(models.Bucket,{as:"UserBucketMany",through:"user_bucket"});
        models.User.belongsToMany(models.Bucket,{as:"hasUploadUser",through:"user_bucket_upload"});
        models.User.belongsToMany(models.Role,{through:"user_role"});
        models.User.hasMany(models.Bucket,{as:'bucketAdmin'});
        models.User.hasMany(models.User,{as:'referee',foreignKey:'refereeId'});
        models.User.hasMany(models.Template);
    };

    return User;
};