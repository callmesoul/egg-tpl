module.exports = app => {
    app.beforeStart(function* () {
        // 应用会等待这个函数执行完成才启动
        app.locals.tokenScrect = "JSON-WEB-TOKEN";
        app.locals.defaultMsg = "操作失败，请稍后再试。";
        app.locals.wechat = { appId: "wx1e26b1652eed13a3", appSecret: "901c3d94bdf628c229ce34f7c823f060", token: "token" };
        app.model.sync();
    });
};