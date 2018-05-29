export default (sequelize, DataTypes) => {
    const Permission = sequelize.define('Permission', {
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            type:{
                type: DataTypes.STRING,
                allowNull: false,
                remark:"权限类型：operate操作 menu菜单 page 页面"
            }
        },{
            timestamps: true,
            paranoid: true,

        }
    );

    Permission.associate = function(models) {
        models.Permission.belongsToMany(models.Role,{through:"role_perssion"});

    };

    return Permission;
};