export default (sequelize, DataTypes) => {
    const Bucket = sequelize.define('Bucket', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
            name:{
                type: DataTypes.STRING,
                allowNull: false,
                unique:true,
                remark:"Bucket 名称"
            },
            space:{
                type: DataTypes.BIGINT,
                allowNull: false,
                defaultValue:0,
                remark:"使用空间"
            },
            count:{
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:0,
                remark:"文件数"
            },
            flow:{
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:0,
                remark:"流量"
            },
            request:{
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:0,
                remark:"请求数"
            },
            max:{
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:1024
            },
            share:{
                type:DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue:true,
                remark:"相册是否全部人可分享"
            },
            wartermark:{
                type: DataTypes.TEXT,
                allowNull: true,
                remark: "水印样式参数"
            },
            wartermarkImage:{
                type: DataTypes.STRING,
                allowNull: true,
                remark: "水印图片"
            },
            wartermarkGravity:{
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: 'SouthEast',
                remark: "水印位置"
            },
            wartermarkDissolve:{
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 100,
                remark: "水印图片透明度"
            },
            wartermarkDx:{
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 10,
                remark: "横轴边距"
            },
            wartermarkDy:{
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 10,
                remark: "纵轴边距"
            },
    },{
            timestamps: true,
            paranoid: true,
        }
     );

    Bucket.associate = function(models) {
        models.Bucket.belongsToMany(models.User,{as:"UserBucketMany",through:"user_bucket"});
        models.Bucket.belongsToMany(models.User,{as:"hasUploadUser",through:"user_bucket_upload"});
    };

    return Bucket;
};