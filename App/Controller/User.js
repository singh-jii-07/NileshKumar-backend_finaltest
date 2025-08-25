import bcrypt from "bcryptjs";
import User from '../Module/User.js'
const registerUser=async(req,res)=>{
    try{

    
const {name,email,password}=req.body
if(!name || !email|| !password){
     return res.status(400).json({
                message: "All fields are required"
            })
            
}

  const oldUser = await User.findOne({email});
        if(oldUser){
            return res.status(400).json({
                message: "User already exists with this email"
            })
        }
const hashedPaswd = await bcrypt.hash(password, 10);

const user= new User({
    name,
    email,
    password: hashedPaswd
})
console.log(name)
await user.save()
 return res.status(201).json({
            message: "User registered successfully",
           user
        })
}
  catch(err){
        console.error("Error in registerUser:", err);
        res.status(500).json({ message: "Internal server error",err });
    }
}
export {registerUser}