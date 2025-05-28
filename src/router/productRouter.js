import express from 'express'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { addProduct, editProduct, getProduct } from '../controllers/productController.js'

const ProductRouter = express.Router()

// ProductRouter.post("/addproduct", (req,res)=>{
//     console.log("the route is working fine")
// })
ProductRouter.post("/addproduct", asyncHandler(addProduct))
ProductRouter.get("/getproduct", asyncHandler(getProduct))
ProductRouter.put("/editproduct", asyncHandler(editProduct))

export default ProductRouter