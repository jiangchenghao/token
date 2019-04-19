'use strict';
const Service = require('egg').Service;
// const Service = require('../core/base_service')

class IndexService extends Service {

  async add(payload){
    const res=await this.ctx.model.Index.create(payload)
    return this.ctx.body=res
  }

  async show() {
    const res=await this.ctx.model.Index.find()
    return this.ctx.body=res
    
  
}
async update(id,payload){
  const res=await this.ctx.model.Index.findByIdAndUpdate(id,payload)
  return this.ctx.body=res
}
async delete(_id){
  const res=await this.ctx.model.Index.findByIdAndRemove(_id)
  return this.ctx.body=res
}
}

module.exports = IndexService;
