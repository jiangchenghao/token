'use strict';
const Controller = require('egg').Controller;


class UserController extends Controller {
    async create() {
		const { ctx, service } = this;
		const payload = ctx.request.body || {};
		const result = await service.user.create(payload);
		console.log('result',result);
		ctx.body = result;
	}
	async update() {
		const { ctx, service } = this;
		const { id } = ctx.query;
		const payload = ctx.request.body || {};
		const res = await service.user.update(id,payload);
		ctx.body = res;
	}
	async delete() {
		const { ctx, service } = this;
		const { id } = ctx.query;
		const res = await service.user.delete(id);
		ctx.body = res;
	}
	async find() {
		const { ctx, service } = this;
		const { id } = ctx.query;
		const res = await service.user.find(id);
		ctx.body = res;
	}
	async login() {
		const { ctx, service } = this;
		const payload = ctx.request.body || {};
		const userData = await service.user.login(payload.phone);
		console.log(userData)
		const token = await service.token.creatToken(userData._id);
		console.log('token--------->',token);
		if(userData.password === payload.password){
			this.ctx.body = {userData,token}
		}else {
			ctx.body ='账号不存在或者密码有误';
		}
	}
    
}
module.exports = UserController