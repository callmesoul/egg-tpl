'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
      let params = ctx.query;
      let page=params.page?params.page:1;
      let limit=params.limit?params.limit:12;
      let offest=(page - 1) * limit;
      let order=params.order?params.order:[['createAt', 'DESC']];
      let result=await ctx.model.Order.findAndCountAll({where:params,limit:limit,offset:offest,order:order});
      ctx.body={
          dataList:result.rows,
          pageParams:{
              page:page,
              pageTotal:Math.ceil(result.count/limit),
              totalRow:result.count
          }
      }
  }
    async show(ctx) {
        let id=ctx.params.id;
        ctx.body={
            data:await ctx.model.Order.findById(id)
        }
    }
    async create(ctx) {//增
      let result=await ctx.model.Order.create(ctx.body);
      if(result){
          ctx.body={
              data:result
          }
      }else{
          ctx.response.status = 400;
          ctx.response.body = {
              error:ctx.locals.defaultMsg
          }
      }
    }
    async update(ctx) {
        let result=await ctx.model.Order.update(ctx.body,{where:{id:ctx.params.id}});
        if(result){
            ctx.body={
                data:"操作成功！"
            }
        }else{
            ctx.response.status = 400;
            ctx.response.body = {
                error:ctx.locals.defaultMsg
            }
        }
    }
    async destroy(ctx) {
        let result=await ctx.model.Order.destroy({where:{id:ctx.params.id}});
        if(result){
            ctx.body={
                data:"操作成功！"
            }
        }else{
            ctx.response.status = 400;
            ctx.response.body = {
                error:ctx.locals.defaultMsg
            }
        }
    }
}

module.exports = HomeController;
