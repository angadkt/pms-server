import mongoose, { Schema } from "mongoose"


const Category = new Schema({
    name:{
        type:String,
        required:true,
    },

})

const category = mongoose.model("Category", Category)
export default category