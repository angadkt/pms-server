import mongoose, { Schema } from 'mongoose'

const Auth = new Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type: String,
        required:true,
        select:false
    }
})

const userSchema = mongoose.model("userSchema", Auth)
export default userSchema