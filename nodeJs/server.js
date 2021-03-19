const express = require('express');
const app=express();
const mongoose=require("mongoose");
const router= require("./routes/api");
const bodyParser= require('body-parser');

const dotenv=require("dotenv");
dotenv.config();

const cors = require('cors');
app.use(cors());
app.all('/',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
next()
});


const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false
}

mongoose.connect(process.env.DB_CONNECT,
    connectionParams)
    .then(()=>
    {
        console.log("connected to db");
    })
    .catch((err)=>{
        console.log(`error connecting ${err}`);
    });


app.use(bodyParser.json());
app.use('/', router);
    
app.listen(8080, ()=>console.log("app listen port 8080"))