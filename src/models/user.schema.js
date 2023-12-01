import mongoose from 'mongoose'
import AuthRoles from '../utils/authRoles'
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema(
    {
          name:{
            type:String,
            required:[true,"Name is required"],
            maxLength:[50,"Name must is less than 50 characters"]
          },
          email:{
            type:String,
            required:[true,"Email is requied"]
          },
          password:{
            type:String,
            required:[true,"Password is required"],
            minLength: [8, "password must be at least 8 characters"],
            select: false
          },
          role: {
            type: String,
            enum: Object.values(AuthRoles),
            default: AuthRoles.USER
        },
        forgotPasswordToken: String,
        forgotPasswordExpiry: Date
    },
    {timestamps:true})
;

userSchema.pre("save",async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods = {
    //compare password
    comparePassword: async function(enteredPassword){
        return await bcrypt.compare(enteredPassword, this.password)
    }
}

export default mongoose.model("User",userSchema)