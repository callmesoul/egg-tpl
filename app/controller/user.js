'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
      let code=ctx.query.code;
      let inviteId=ctx.query.inviteId
      let res= await ctx.curl(`https://api.weixin.qq.com/sns/jscode2session?appid=${ctx.locals.appId}&secret=${ctx.locals.appSecret}&js_code=${code}&grant_type=authorization_code`, {
          dataType: 'json',
      });
      var user;
      if(res.openid){
          user=await ctx.model.User.findOne({where:{openId:res.openid}});
          if(user){
              // if(args.refereeId){
              //     delete args.refereeId
              // }
              // user.update(args);
          }else {
              let parms={openId:res.openid}
              if(inviteId){
                  parms.inviteId=inviteId;
              }
              user=await ctx.model.User.create(parms);
          }
      }else{
          console.log(res);
          throw new Error (res.message)
      }
      console.log("curl:",user);
      let token = await jwt.sign({ id: user.id }, this.locals.tokenScrect,{
          expiresIn:'1y'
      });
  }
}

module.exports = HomeController;
