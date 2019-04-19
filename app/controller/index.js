'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
    
    async add(){
        const {ctx,service}=this
        const payload = ctx.request.body || {}
        const res=await service.index.add(payload)
        this.ctx.body=res
    }
    
    async show() {
            const {ctx,service}=this
            const payload = ctx.query
            const res = await service.index.show(payload)
            this.ctx.body = res
    }
    async update(){
        const {ctx,service}=this
        const id=ctx.params
        const payload=ctx.request.body||{}
        const res=await service.index.update(id,payload)
        this.ctx.body=res
    }  
    async delete(){
        const {ctx,service}=this
        const id=ctx.params
        const res=await service.index.delete(id)
        this.ctx.body=res
    } 
}

module.exports = IndexController;
