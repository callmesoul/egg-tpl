'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1527555734483_2545';

    // add your config here
    config.middleware = [];

    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'wx-activity',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: 'root',
    };

    config.security = {
        domainWhiteList: [ 'http://localhost:7001' ],
    };

    exports.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

    return config;
};
