export default (sequelize, DataTypes) => {
    const Operate = sequelize.define('Operate', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        value:{
            type: DataTypes.STRING,
            allowNull: true
        },
        url:{
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Operate.associate = function(models) {
        models.Operate.belongsTo(models.Permission, {
            scope: {
                type: 'operate'
            }
        });
    };

    return Operate;
};