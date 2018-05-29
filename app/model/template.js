export default (sequelize, DataTypes) => {
    const Activity = sequelize.define('Activity', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        formId:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: true,
        paranoid: true,

    });


    return Activity;
};