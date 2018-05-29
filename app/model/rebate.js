export default (sequelize, DataTypes) => {
    const Rebate = sequelize.define('Rebate', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        refereeId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        beFereeId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        space:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0.1,
            remark:"奖励容量大小G"
        }
    },{
        timestamps: true,
        paranoid: true,

    });
    return Rebate;
};