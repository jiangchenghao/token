'use strict';

module.exports = app => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const UserSchema = new Schema({
		phone: {type: String, required:true, unique: true,},//电话号码唯一性，作为账号使用
		userName: {type: String,},
		password: {type: String, required: true,},
		age: {type: Number, default: 18},//数据类型为string，默认值18
		address: {type: String, lowercase: true},//地址，默认小写
		email: {type: String, match: RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/)},//邮箱，正则表达式验证
	},{
		versionKey: false,//去掉版本锁 __v0
		timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }//自动管理修改时间
	});
	return mongoose.model('user', UserSchema);
};

