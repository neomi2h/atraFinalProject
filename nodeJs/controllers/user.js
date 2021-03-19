const User = require('../models/User');
const nodemailer= require('../js/nodeMailer')
const jwt=require('../js/jwt')

// ******************hello************************
const hello = async(req,res) =>{
  res.status(200).send('connect react')
}

// ******************************register*********************************
const register = async (req, res) => {
  try{
   console.log("in register")
    req.body.password=jwt.jwtSign(req.body.password);
    console.log(req.body.password);
    let newUser = new User(req.body);
    console.log(newUser);
    newUser.save();
    console.log("in register")
    //nodemailer(newUser.email)
    res.status(200).json({theUser:newUser});
  }
  catch(error){
    res.status(400).json({errorMessage:error});
}}

// ******************************login*********************************
const login=async(req, res)=>{
    let user;
    try{
      
      user= await User.find({name:req.body.name});
      console.log(user);
     // console.log(user[0].password)
      let decoded=jwt.jwtVerify(user[0].password);
      //console.log(decoded);
      if (req.body.password!=decoded){
           res.send("could not have user");
        }
      else
      {
        console.log("it work")
      }
      //nodemailer(user[0].email)
      res.status(200).json({theUser:user});
    }
    catch(error){
      res.status(400).json({errorMessage:error});
    }
  
  }

module.exports = {hello, register, login };