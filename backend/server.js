const express=require("express");
const cors = require("cors"); 
const app=express();
const {PORT}=require("./config/index"); // Importing PORT from config folder

const userRouter=require("./router/user.router");// Importing user routes


app.use(cors());// Middleware to enable CORS 


app.use(express.json());// Middleware to parse JSON requests


app.use("/api",userRouter);

app.listen(PORT,(err)=>{
    if(err) console.log(err);
    console.log("server running on port: ",PORT);
});