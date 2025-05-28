import { data } from "framer-motion/client";
import category from "../models/categoryModel/categorySchema.js";
import subCategorySchema from "../models/subCategoryModel/SubCategory.js";
import CustomError from "../utils/customErrorHandler.js";

export const addSubCategory = async (req ,res) => {
    if(!req.body){
        throw new CustomError("input data not found", 404)
    }
    const {name , category} = req.body
    if(!name || !category){
        throw new CustomError("error occured in input", 404)
    }

    const newSubCategory = new subCategorySchema({
        name,
        category
    })
    if(!newSubCategory){
        throw new CustomError("adding sub-category failed", 404)
    }


    await newSubCategory.save()

    return res.status(200).json({message:"sub-category added successfully"})
}

export const getSubcategory = async (req ,res) => {
    const subCategoryData = await subCategorySchema.find()
    if(!subCategoryData){
        throw new CustomError("sub category data not found", 404)
    }
    return res.status(200).json({message:"subcategory data fetched successfully"})
}