import mongoose, {  Schema } from "mongoose";

const SubCategoryModel = new Schema({
    name :{
        type:String,
        required:true,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "category"
    }
})

const subCategorySchema = mongoose.model("subCategorySchema", SubCategoryModel)
export default subCategorySchema