export default (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        timestamps: true,
        paranoid: true,

    });

    Order.associate = function(models) {
        models.Order.hasOne(models.Rebate);
    };


    return Order;
};