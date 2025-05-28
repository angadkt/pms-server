import express from 'express'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { addSubCategory } from '../controllers/subCategoryController.js'

const subCategoryRoute = express.Router()

subCategoryRoute.post("/addsubcat", asyncHandler(addSubCategory))

export default subCategoryRoute