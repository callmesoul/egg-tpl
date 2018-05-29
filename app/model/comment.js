export default (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        contnet:{
            type: DataTypes.STRING,
            allowNull: false,
            remark:"点评内容"
        },
    },{
        timestamps: true,
        paranoid: true,
    });

    Comment.associate = function(models) {

    };
    return Comment;
};