const jwt= require('jsonwebtoken')
const dotenv=require('dotenv')

const jwtSign=(pass)=>{
    let token=jwt.sign(pass,process.env.ACCSESS_TOKEN_SECRET
    )
    //console.log(token)
    return token;
}
const jwtVerify=(pass)=>{
    let decoded=jwt.verify(pass,process.env.ACCSESS_TOKEN_SECRET)
    //console.log(decoded)
    return decoded;
}

module.exports = {jwtSign, jwtVerify};
