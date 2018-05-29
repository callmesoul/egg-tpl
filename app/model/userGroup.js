export default (sequelize, DataTypes) => {
    const UserGroup = sequelize.define('UserGroup', {
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
        }
     );

    UserGroup.associate = function(models) {
        models.UserGroup.belongsToMany(models.User,{through:"user_usergroup"});
        models.UserGroup.belongsToMany(models.Role,{through:"role_usergroup"});
    };


    return UserGroup;
};