import mongoose, { Schema } from 'mongoose'

const Product = new Schema({
    name : {
        type : String,
        required : true,
    },
    description: {
        type : String,
        required : true,
    },
    subCategory:{
        type: String,
        required :true, 
    },
    variants : [
        {
            ram : String,
            price : Number,
            qty : Number
        }
    ],
    images : [String]
})

const  productSchema = mongoose.model("productSchema", Product)
export default productSchema