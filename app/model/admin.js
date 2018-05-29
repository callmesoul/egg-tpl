export default (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Admin.associate = function(models) {
        models.User.belongsToMany(models.UserGroup,{through:"user_usergroup"});
        models.User.belongsToMany(models.Bucket,{as:"UserBucketMany",through:"user_bucket"});
        models.User.belongsToMany(models.Bucket,{as:"hasUploadUser",through:"user_bucket_upload"});
        models.User.belongsToMany(models.Role,{through:"user_role"});
        models.User.hasMany(models.Bucket,{as:'bucketAdmin'});
        models.User.hasMany(models.User,{as:'referee',foreignKey:'refereeId'});
        models.User.hasMany(models.Template);
    };

    return Admin;
};