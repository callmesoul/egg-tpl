export default (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
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

    Role.associate = function(models) {
        models.Role.belongsToMany(models.UserGroup,{through:"role_usergroup"});
        models.Role.belongsToMany(models.User,{through:"user_role"});
        models.Role.belongsToMany(models.Permission,{through:"role_perssion"});
    };

    return Role;
};