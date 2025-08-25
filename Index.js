import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { userRoutes } from './App/Routes/User.js'
import fileRouter from './App/Routes/Cloudinary.js'
dotenv.config()

const app=express()
app.use(express.json());
app.use("/api/user",userRoutes)
app.use("/api/uploade",fileRouter)
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