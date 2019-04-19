'use strict'
const jwt = require('jwt-simple');//npm install --save jwt-simple
module.exports = (option,app)=>{
    // console.log(app);
    return async function(ctx,next){
        console.log(ctx,next);
        if(!ctx.headers.authorization){
            ctx.body = {
                msg:'wutoken'
            }
        }
        else{
            const token = ctx.headers.authorization.split(' ')[1];
            console.log('----------------->>>>',token);
            try{
                const payload = jwt.decode(token,ctx.app.config.secret);
            console.log('----------------->>>>',payload);
            var now = Math.floor( Date.now());
            console.log('----------------->>>>',now);
            if(now>payload.exp){
                ctx.body={
                    msg:"token 过期"
                }
            }else{
               const res =  await ctx.service.user.find(payload._id);
               if(!res){
                   ctx.body = {
                       msg:"身份错误"
                   }
               }
               else{
                    await next()
               } 
            }
            }catch(e){
                console.log('e======>',"token错误");
                ctx.body = {
                    msg:'token错误'
                }
            }
            

        }
       
    }
}
;
