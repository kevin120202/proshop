import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/ProductModel.js"

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find({})
    if (products) {
        res.status(200).json({ success: true, data: products })
    }
    res.status(404).json({ success: false, message: "Products not found" })
})

// @desc    Get a single product
// @route   GET /api/products/:id
// @access  Public
export const getProduct = asyncHandler(async (req, res, next) => {
    const products = await Product.findById(req.params.id)
    res.status(200).json({ success: true, data: products })
})