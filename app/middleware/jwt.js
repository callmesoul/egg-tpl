// app/middleware/jwt.js
import jwt from 'jsonwebtoken'
module.exports = options => {
    return async function (ctx, next) {
        if(ctx.request.url != "/login"){//非登陆接口
            let token =ctx.request.header["zsnice-token"];
            if(token){
                try {
                    let decoded = jwt.verify(token, ctx.locals.tokenScrect);
                    if (decoded.id) {
                        var user;
                        if (decoded.type == 'admin') { //登录者为管理员
                            user = await ctx.model.Admin.findById(decoded.id);
                        } else { //登录者普通用户
                            user = await ctx.model.Merchant.findOne({ where: { login_id: decoded.id, deleted_at: null } });
                        }
                        if (user) {
                            ctx.user = user;
                            await next();
                        } else {//用户不再存在
                            ctx.response.status = 403;
                            ctx.response.body = {
                                error: "token无效或过期，禁止请求！"
                            }
                        }
                    } else {//token解析错误
                        ctx.response.status = 403;
                        ctx.response.body = {
                            error: "token无效或过期，禁止请求！"
                        }
                    }
                }
                catch(err) {
                    ctx.response.status = 403;
                    ctx.response.body = {
                        error: "token无效或过期，禁止请求！"
                    }
                }
            }else{
                ctx.response.status = 403;
                ctx.response.body = {
                    error: "token无效或过期，禁止请求！"
                }
            }
        }else {//登陆不需要token
            await next();
        }
    };
};