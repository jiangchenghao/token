'use strict';
const Service = require('egg').Service;
// const Service = require('../Base/baseService');

class UserService extends Service {

	async create(payload) {
			const {ctx} = this;
			const result = await ctx.model.User.create(payload);
			return this.ctx.body=result
	}
	async update(id,payload) {
		const result = await this.ctx.model.User.findOneAndUpdate({_id:id},payload,{new:true});
		return this.ctx.body=result
	}
	async login(phone) {
		const { ctx } = this;
		console.log("service层是否获取到了参数=====>", phone);
		const res = await this.ctx.model.User.find({phone:phone});
		return this.ctx.body=(res[0])
	}
	async find(id) {
		const result = await this.ctx.model.User.findById(id);
		return this.ctx.body=result
	}
	async delete(id) {
		let res;
		try {
			res = await this.ctx.model.User.findById(id);
			if (res) {
				res = await this.ctx.model.User.findByIdAndRemove(id);
				console.log("已经删除", res);
				return this.ctx.body=res
			} else {
				console.log("用户不存在");
				return this.ctx.body='用户不存在'
			}
		} catch (error) {
			console.log("捕捉异常", error);
			return error;
		}
	}

}

module.exports = UserService;
