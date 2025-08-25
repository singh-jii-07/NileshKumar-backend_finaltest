import mongoose from 'mongoose'

const Userschema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const user=mongoose.model("userdata",Userschema)
export default user