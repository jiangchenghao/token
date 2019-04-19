module.exports = app =>{
    const mongoose = app.mongoose;
    const gamesSchema = new mongoose.Schema(
        {
            name:{type:String,required:true,unique:true},
            content:{type:String},
            category:{type:String},
            images:{type:String}    
        }
        
    );
    return mongoose.model('games',gamesSchema)
}