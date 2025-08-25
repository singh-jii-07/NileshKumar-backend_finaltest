import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app=express()

mongoose.connect(process.env.Mongoose_URL)
.then(()=>{
    console.log("db connect")
    app.listen(process.env.PORT,()=>{
    console.log(`server is running in the port:${process.env.PORT}`)
    })
   app.get('/',(req,res)=>{
    res.send("hello")
   })
})

.catch((err)=>{
    console.log("error",err)
})