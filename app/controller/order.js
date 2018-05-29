'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
      ctx.body="index";
  }
    async show(ctx) {
        ctx.body="show";
    }
    async create(ctx) {
        ctx.body="create";
    }
    async update(ctx) {
        ctx.body="update";
    }
    async destroy(ctx) {
        ctx.body="destroy";
    }
}

module.exports = HomeController;
