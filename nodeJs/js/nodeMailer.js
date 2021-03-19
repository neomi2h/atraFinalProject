const nodemailer=require("nodemailer");
const dotenv=require("dotenv");
dotenv.config();

async function main(userEmail){

var transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'efratkohelet@gmail.com',
        pass:'e28k1t97'
    }
})

var mailOption={
    to:userEmail,
    subject:"welcome",
    text:"welcome"
}

transporter.sendMail(mailOption, function(error, info){
    console.log(userEmail)
    if(error){
        console.log(`error in nodemailer ${error}`);
    }
    else{
        console.log("Email send: ", info.response)
    }
})
}

// main()
module.exports =  main ;