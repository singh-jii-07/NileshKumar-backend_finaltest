import express from 'express'
import{registerUser} from '../Controller/User.js'
const userRoutes=express.Router()
userRoutes.post("/add",registerUser)
export {userRoutes}