import category from "../models/categoryModel/categorySchema.js";
import subCategorySchema from "../models/subCategoryModel/SubCategory.js";
import CustomError from "../utils/customErrorHandler.js";

export const addCategory = async (req ,res) =>{
    if(!req.body){
        throw new CustomError("data not found", 404)
    }
    const {name} = req.body
    if(!name){
        throw new CustomError("category not found", 404)
    }

    const newCategory = new category({
        name
    })
    if(!newCategory){
        throw new CustomError("adding category failed", 404)
    }

    await newCategory.save()
    return res.status(200).json({message:`${name} added to category`})
}




export const getCategory = async (req ,res) => {
    const categoryData = await category.find()
    if(!categoryData){
        throw new CustomError("category data not found", 404)
    }
    return res.status(200).json({message:"category data fetched successfully", data: categoryData})
}