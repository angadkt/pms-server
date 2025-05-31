import productSchema from "../models/productModel/productModel.js";
import subCategorySchema from "../models/subCategoryModel/SubCategory.js";
import CustomError from "../utils/customErrorHandler.js";

// ====================== Add product =============================
export const addProduct = async (req, res) => {
  if (!req.body) {
  return res.status(400).json({ message: "Request body is missing" });
}

  const { name, description, subCategory, variants, images } = req.body;
  if (
    !name ||
    !subCategory ||
    !variants ||
    !Array.isArray(variants) ||
    variants.length === 0
  ) {
    throw new CustomError("credantials are required", 400);
  }


  for (const variant of variants) {
    // if (
    //   !variant.ram || variant.price || variant.qty 
    // ) {
    //   return res.status(400).json({
    //     message:
    //       "Each variant must have ram, price (number), and qty (number).",
    //   });
    // }
    console.log("var" , variant)
  }

  const subCat = await subCategorySchema.findById(subCategory);

  if (!subCat) {
    return res.status(404).json({ message: "Sub-category not found." });
  }

  const product = new productSchema({
    name,
    description,
    subCategory,
    variants,
    images: images || [],
  });

  await product.save()

  return res.status(200).json({ message: "product added", data: product });
};

// =============== Get product =============================

export const getProduct = async (req, res) => {
  const products = await productSchema.find();
  if (!products) {
    throw new CustomError("product fetching failed", 404);
  }
  return res
    .status(200)
    .json({ message: "products fetched successfully", data: products });
};

//  ================= edit product =================================

export const editProduct = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  if (!updatedData) {
    throw new CustomError("updated data not found", 400);
  }

  const updatedProduct = await productSchema.findByIdAndUpdate(
    id,
    updatedData,
    { new: true, runValidators: true }
  );

  if (!updatedProduct) {
    throw new CustomError("error occured updating product", 400);
  }

  return res.status(200).json({message:"product edited successful", data:updatedProduct})
};
 