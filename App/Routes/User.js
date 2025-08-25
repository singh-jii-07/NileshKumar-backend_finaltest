import express from 'express'
import{registerUser,logingUser} from '../Controller/User.js'
const userRoutes=express.Router()
userRoutes.post("/add",registerUser)
userRoutes.post("/get",logingUser)
export {userRoutes}