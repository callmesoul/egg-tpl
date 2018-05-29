import Sequelize from 'sequelize';
import fs from 'fs'
import path from 'path'
import config from "../config";
var basename  = path.basename(__filename);

let env = process.env.NODE_ENV || 'development'
console.log("===============================================")
console.log("process.env.NODE_ENV",env);
console.log("===============================================")
var sqlConfig;
if(env=='development'){
    sqlConfig={
        database:"graphql",
        user:"root",
        pass:"root"
    };
}else {
    sqlConfig={
        database:"smart",
        user:"root",
        pass:"windowwei"
    };
}

console.log(sqlConfig);
var sequelize = new Sequelize(sqlConfig.database, sqlConfig.user, sqlConfig.pass, {
    host:'localhost',
    dialect:'mysql',
    timezone: '+08:00'
});



const db={
    User:sequelize.import('./user'),
    Operate:sequelize.import('./operate'),
    Permission:sequelize.import('./permission'),
    Role:sequelize.import('./role'),
    UserGroup:sequelize.import('./userGroup'),
    Bucket:sequelize.import('./bucket'),
    Referee:sequelize.import('./referee'),
    Template:sequelize.import('./template'),
}
// let db={};
//
// fs
//     .readdirSync(__dirname)
//     .filter(file => {
//         return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//     })
//     .forEach(file => {
//         console.log(path.join(__dirname, file))
//         var model = sequelize['import'](path.join(__dirname, file));
//         console.log(model.name);
//         db[model.name] = model;
//     });
//
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
//
db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;