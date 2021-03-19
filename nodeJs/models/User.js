const mongoose=require('mongoose');
require('mongoose-type-email');

const userSchema=mongoose.Schema({
    name:{
      type:String,
       default:"user" 
    },
    password:{
        type:String,
        minlength:6
    },
    phone:{
        type:String
    },
    email:{
        type:mongoose.SchemaTypes.Email
    },
    drinks:[
        {
            type:mongoose.Schema.Types.ObjectId, ref:"Drink"
        }
    ]
})
module.exports=mongoose.model('User', userSchema);