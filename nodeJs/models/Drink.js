const mongoose=require('mongoose');

const drinkSchema=mongoose.Schema({
    label:{
        type:String,
        require:true
    },
    value:{
        type:String
    }, 
    image:{
        type:String
    }, 
    owner:{
        type:mongoose.Types.ObjectId, ref:"User"
    }
})
module.exports=mongoose.model('Drink', drinkSchema);