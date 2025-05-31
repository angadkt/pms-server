import express from 'express'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { addCategory, getCategory } from '../controllers/categoryController.js'


const categoryRoute = express.Router()

categoryRoute.post("/addcategory", asyncHandler(addCategory))
categoryRoute.get("/getcategory", asyncHandler(getCategory))


export default categoryRoute