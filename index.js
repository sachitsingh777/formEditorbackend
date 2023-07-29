const express=require("express")
const app=express()
const {connection} =require("./db");
const { formRouter } = require("./routes/Form_routes");
const cors = require('cors');
const { answerRouter } = require("./routes/Answer_routes");
require('dotenv').config()
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send(" home Page")
})
app.use("/form",formRouter)
app.use("/answer",answerRouter)
app.listen(process.env.PORT,async()=>{
  try{
    await connection
    console.log("connected to the db")
  }catch(err){
    console.log(err)
    console.log("Not connected to the db")    
  }
  console.log("server running at the port")
})