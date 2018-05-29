export default (sequelize, DataTypes) => {
    const Template = sequelize.define('Template', {
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


    return Template;
};